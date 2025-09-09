const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js');
const { anony } = require('../lib/terri');

// video
cmd({
    pattern: "song",
    alias: ["audio", "yta"],
    react: "🎵",
    desc: "Download YouTube audio",
    category: "downloader",
    use: ".mp3 <query/url>",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply("🎵 Please provide video name/URL");
        
        // 1. Indicate processing
        await conn.sendMessage(from, { react: { text: '⏳', key: m.key } });
        
        // 2. Search YouTube
        const yt = await ytsearch(q);
        if (!yt?.results?.length) {
            await conn.sendMessage(from, { react: { text: '❌', key: m.key } });
            return reply("No results found");
        }
        
        const vid = yt.results[0];
        
        // 3. Fetch audio using the new API
        const api = `https://api.nexoracle.com/downloader/yt-audio2?apikey=MatrixZatKing&url=${encodeURIComponent(vid.url)}`;
        const res = await fetch(api);
        const json = await res.json();
        
        if (!json?.result?.audio) {
            await conn.sendMessage(from, { react: { text: '❌', key: m.key } });
            return reply("Audio download failed");
        }
        
        // 4. Create stylish caption
        const caption = `
╭─〔 *🎵 VERONICA AUDIO DOWNLOADER* 〕
├─▸ *📌 Title:* ${json.result.title || vid.title}
├─▸ *⏳ Duration:* ${vid.timestamp || "N/A"}
├─▸ *📊 Quality:* ${json.result.quality || 'MP3'}
├─▸ *👤 Author:* ${vid.author?.name || "Unknown"}
╰─➤ *Powered by terri*`;
        
        // 5. Send audio as document with formatted caption
        await conn.sendMessage(from, {
            document: { url: json.result.audio },
            mimetype: 'audio/mpeg',
            fileName: `${(json.result.title || vid.title).replace(/[^a-zA-Z0-9]/g, '_')}.mp3`,
            caption: caption
        }, { quoted: anony });
        
        // 6. Success reaction
        await conn.sendMessage(from, { react: { text: '✅', key: m.key } });
        
    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: m.key } });
        reply("Error occurred while downloading audio");
    }
});



cmd({ 
    pattern: "video2", 
    alias: ["song2", "ytv2"], 
    react: "🎥", 
    desc: "Download Youtube song", 
    category: "main", 
    use: '.song < Yt url or Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("Please provide a YouTube URL or song name.");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        let apiUrl = `https://api.zenzxz.my.id/downloader/ytmp4?url=${encodeURIComponent(yts.url)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (!data.status || !data.download_url) {
            return reply("Failed to fetch the video. Please try again later.");
        }
        
        let ytmsg = 
`*YT VIDEO DOWNLOADER*        
╭━━❐━⪼
┇๏ *Title* -  ${data.title || yts.title}
┇๏ *Duration* - ${data.duration ? Math.floor(data.duration / 60) + ":" + (data.duration % 60).toString().padStart(2, '0') : yts.timestamp}
┇๏ *Quality* - ${data.format || 'Unknown'}
┇๏ *Author* -  ${yts.author.name}
╰━━❑━⪼`;

  
        await conn.sendMessage(from, { 
            image: { url: data.thumbnail || yts.thumbnail || '' }, 
            caption: ytmsg 
        }, { quoted: anony });

        // Send video file
        await conn.sendMessage(from, { 
            video: { url: data.download_url }, 
            mimetype: "video/mp4",
            caption: `📥 *Download Complete*\n${data.title || yts.title}`
        }, { quoted: anony });
        
    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
});