
const { cmd } = require('../command');
const axios = require('axios');
const { anony } = require('../lib/terri');

cmd({
    pattern: "apk",
    alias: ["app"],
    react: "📲",
    desc: "📥 Download APK directly",
    category: "📁 Download",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply("❌ *Please provide an app name!*");

        // ⏳ React - processing
        await conn.sendMessage(from, { react: { text: '⏳', key: m.key } });

        const { data } = await axios.get(`https://api.nekolabs.my.id/discovery/apkcombo/search?q=${encodeURIComponent(q)}`);

        if (!data.status || !data.result || data.result.length === 0) {
            await conn.sendMessage(from, { react: { text: '❌', key: m.key } });
            return reply("❌ *App not found or API error.*");
        }

        const app = data.result[0]; // Get the first result

        // Send APK file directly
        await conn.sendMessage(from, {
            document: { url: app.downloadUrl },
            mimetype: "application/vnd.android.package-archive",
            fileName: `${app.name.replace(/\s+/g, '_')}.apk`,
            caption: `📱 *${app.name}*\n⭐ *Rating:* ${app.rating}\n📊 *Downloads:* ${app.downloaded}\n💾 *Size:* ${app.size}\n\n✅ *APK successfully uploaded!*\nPowered By Terri 🤍`
        }, { quoted: anony });

        // ✅ React - success
        await conn.sendMessage(from, { react: { text: '✅', key: m.key } });

    } catch (error) {
        console.error(error);
        await conn.sendMessage(from, { react: { text: '❌', key: m.key } });
        reply("❌ *An error occurred while fetching the APK.*");
    }
});
