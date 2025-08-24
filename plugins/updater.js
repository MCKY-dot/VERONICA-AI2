const { cmd } = require("../command");
const axios = require('axios');
const fs = require('fs');
const path = require("path");
const AdmZip = require("adm-zip");
const { setCommitHash, getCommitHash } = require('../data/updateDB');

cmd({
    pattern: "update",
    alias: ["upgrade", "sync"],
    react: '🆕',
    desc: "Update the bot to the latest version.",
    category: "misc",
    filename: __filename
}, async (conn, mek, m, { from, reply, isOwner }) => {
    if (!isOwner) return reply("❌ This command is only for the bot owner.");

    try {
        // Newsletter configuration
        const newsletterConfig = {
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363397100406773@newsletter',
                    newsletterName: 'VERONICA 𝐔𝐏𝐃𝐀𝐓𝐄𝐒',
                    serverMessageId: 143
                }
            }
        };

        // Initial update check message with newsletter
        await conn.sendMessage(from, {
            text: "🔍 *Checking for VERONICA-AI updates...*",
            ...newsletterConfig
        }, { quoted: mek });

        // Fetch the latest commit hash from GitHub
        const { data: commitData } = await axios.get("https://api.github.com/repos/Terrizev/VERONICA-AI/commits/main");
        const latestCommitHash = commitData.sha;
        const currentHash = await getCommitHash();

        if (latestCommitHash === currentHash) {
            return await conn.sendMessage(from, {
                text: "✅VERONICA is already up-to-date!*",
                ...newsletterConfig
            }, { quoted: mek });
        }

        // Update progress message
        await conn.sendMessage(from, {
            text: "🚀 *Updating VERONICA Bot...*\n\n_This may take a few moments..._",
            ...newsletterConfig
        }, { quoted: mek });

        // Download the latest code
        const zipPath = path.join(__dirname, "latest.zip");
        const { data: zipData } = await axios.get("https://github.com/Terrizev/VERONICA-AI/archive/main.zip", { 
            responseType: "arraybuffer",
            headers: {
                'User-Agent': 'VERONICA-AI'
            }
        });
        fs.writeFileSync(zipPath, zipData);

        // Extract ZIP file
        await conn.sendMessage(from, {
            text: "📦 *Extracting the latest code...*",
            ...newsletterConfig
        }, { quoted: mek });

        const extractPath = path.join(__dirname, 'latest');
        const zip = new AdmZip(zipPath);
        zip.extractAllTo(extractPath, true);

        // Copy updated files
        await conn.sendMessage(from, {
            text: "🔄 *Replacing files while preserving your config...*",
            ...newsletterConfig
        }, { quoted: mek });

        const sourcePath = path.join(extractPath, "VERONICA-AI-main");
        const destinationPath = path.join(__dirname, '..');
        copyFolderSync(sourcePath, destinationPath);

        // Save the latest commit hash
        await setCommitHash(latestCommitHash);

        // Cleanup
        fs.unlinkSync(zipPath);
        fs.rmSync(extractPath, { recursive: true, force: true });

        // Final success message with image
        await conn.sendMessage(from, {
            image: { 
                url: "https://files.catbox.moe/ue0vkz.jpg",
                mimetype: "image/jpeg"
            },
            caption: "✅ *Update complete!*\n\n_Restarting the bot to apply changes..._\n\n⚡ Powered by Terri",
            ...newsletterConfig
        }, { quoted: mek });

        // Restart the bot
        process.exit(0);
    } catch (error) {
        console.error("Update error:", error);
        await conn.sendMessage(from, {
            text: `❌ *Update failed!*\n\nError: ${error.message}\n\nPlease try manually or contact support.`,
            ...newsletterConfig
        }, { quoted: mek });
    }
});

// Improved directory copy function
function copyFolderSync(source, target) {
    if (!fs.existsSync(target)) {
        fs.mkdirSync(target, { recursive: true });
    }

    const items = fs.readdirSync(source);
    for (const item of items) {
        const srcPath = path.join(source, item);
        const destPath = path.join(target, item);

        // Skip sensitive files
        const preservedFiles = ["config.js", "app.json", "credentials.json", "data"];
        if (preservedFiles.includes(item)) {
            console.log(`⚠️ Preserving existing file: ${item}`);
            continue;
        }

        try {
            const stat = fs.lstatSync(srcPath);
            if (stat.isDirectory()) {
                copyFolderSync(srcPath, destPath);
            } else {
                fs.copyFileSync(srcPath, destPath);
            }
        } catch (copyError) {
            console.error(`Failed to copy ${item}:`, copyError);
        }
    }
}
