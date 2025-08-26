const config = require('../config');
const { cmd } = require('../command');
const { ytsearch } = require('@dark-yasiya/yt-dl.js');

// MP4 video download
// MP4 video download with options
cmd({ 
    pattern: "mp4", 
    alias: ["videos"], 
    react: "🎥", 
    desc: "Download YouTube video", 
    category: "main", 
    use: '.mp4 < Yt url or Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("Please provide a YouTube URL or song name.");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        let apiUrl = `https://api.giftedtech.co.ke/api/download/ytmp4?apikey=gifted&url=${encodeURIComponent(yts.url)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (data.status !== 200 || !data.success || !data.result.download_url) {
            return reply("Failed to fetch the video. Please try again later.");
        }

        let ytmsg = `📹 *Video Details*
🎬 *Title:* ${yts.title}
⏳ *Duration:* ${yts.timestamp}
👀 *Views:* ${yts.views}
👤 *Author:* ${yts.author.name}
🔗 *Link:* ${yts.url}

*Choose download format:*
1. 📄 Document (no preview)
2. ▶️ Normal Video (with preview)

_Reply to this message with 1 or 2 to download._`;

        let contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363397100406773@newsletter',
                newsletterName: 'VERONICA-BOT',
                serverMessageId: 143
            }
        };

        // Send thumbnail with options
        const videoMsg = await conn.sendMessage(from, { image: { url: yts.thumbnail }, caption: ytmsg, contextInfo }, { quoted: mek });

        conn.ev.on("messages.upsert", async (msgUpdate) => {
            const replyMsg = msgUpdate.messages[0];
            if (!replyMsg.message || !replyMsg.message.extendedTextMessage) return;

            const selected = replyMsg.message.extendedTextMessage.text.trim();

            if (
                replyMsg.message.extendedTextMessage.contextInfo &&
                replyMsg.message.extendedTextMessage.contextInfo.stanzaId === videoMsg.key.id
            ) {
                await conn.sendMessage(from, { react: { text: "⬇️", key: replyMsg.key } });

                switch (selected) {
                    case "1":
                        await conn.sendMessage(from, {
                            document: { url: data.result.download_url },
                            mimetype: "video/mp4",
                            fileName: `${yts.title}.mp4`,
                            contextInfo
                        }, { quoted: replyMsg });
                        break;

                    case "2":
                        await conn.sendMessage(from, {
                            video: { url: data.result.download_url },
                            mimetype: "video/mp4",
                            contextInfo
                        }, { quoted: replyMsg });
                        break;

                    default:
                        await conn.sendMessage(
                            from,
                            { text: "*Please Reply with ( 1 , 2 or 3) ❤️" },
                            { quoted: replyMsg }
                        );
                        break;
                }
            }
        });

    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
});

// MP3 song download

cmd({
    pattern: "song",
    alias: ["ytdl3", "play"],
    react: "🎶",
    desc: "Download YouTube song",
    category: "main",
    use: '.song < Yt url or Name >',
    filename: __filename
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => {
    try {
        if (!q) return await reply("Please provide a YouTube URL or song name.");

        const yt = await ytsearch(q);
        if (!yt?.results?.length) return reply("No results found!");

        let yts = yt.results[0];
        let apiUrl = `https://api.rijalganzz.my.id/download/ytmp3?url=${encodeURIComponent(yts.url)}`;

        let response = await fetch(apiUrl);
        let data = await response.json();

        // Debugging: log the API response for troubleshooting
        console.log("API response:", data);

        if (!data.status || !data.link) {
            return reply("Failed to fetch the audio. Please try again later.");
        }

        // Sanitize duration (handle comma, string, or number)
        let durationSec = data.duration;
        if (typeof durationSec === "string") durationSec = parseInt(durationSec.replace(/,/g, ""));
        if (typeof durationSec !== "number" || isNaN(durationSec)) durationSec = null;
        const duration = durationSec
            ? `${Math.floor(durationSec / 60)}:${Math.floor(durationSec % 60).toString().padStart(2, '0')}`
            : 'Unknown';

        // Sanitize filesize
        let filesizeNum = data.filesize;
        if (typeof filesizeNum === "string") filesizeNum = parseInt(filesizeNum.replace(/,/g, ""));
        if (typeof filesizeNum !== "number" || isNaN(filesizeNum)) filesizeNum = null;
        const fileSize = filesizeNum
            ? `${(filesizeNum / (1024 * 1024)).toFixed(2)} MB`
            : 'Unknown';

        let ytmsg = `🎵 *Song Details*
🎶 *Title:* ${data.title || yts.title}
⏳ *Duration:* ${duration}
💾 *Size:* ${fileSize}
👀 *Views:* ${yts.views}
👤 *Author:* ${yts.author.name}
🔗 *Link:* ${yts.url}

_Downloading MP3..._`;

        let contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363397100406773@newsletter',
                newsletterName: 'VERONICA-BOT',
                serverMessageId: 143
            }
        };

        await conn.sendMessage(from, {
            image: { url: data.thumbnail || yts.thumbnail },
            caption: ytmsg,
            contextInfo
        }, { quoted: mek });

        // Send MP3 as document directly
        await conn.sendMessage(from, {
            document: { url: data.link },
            mimetype: "audio/mpeg",
            fileName: `${(data.title || yts.title).replace(/[^\w\s]/gi, '')}.mp3`,
            contextInfo
        }, { quoted: mek });

    } catch (e) {
        console.log("Error in song command:", e);
        reply("An error occurred. Please try again later.");
    }
});
