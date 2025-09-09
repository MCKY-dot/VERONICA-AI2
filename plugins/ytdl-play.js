const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); 
const converter = require('../data/play-converter');
const fetch = require('node-fetch');
const { anony } = require('../lib/terri');


cmd({ 
    pattern: "play4", 
    alias: ["yta4"], 
    react: "☘️", 
    desc: "Download YouTube song via Zenxz API", 
    category: "main", 
    use: '.play4 <query or youtube url>', 
    filename: __filename 
}, async (conn, mek, m, { from, sender, reply, q }) => { 
    try {
        if (!q) return reply("*Please provide a song name or YouTube link.*");

        let ytUrl = '';
        if (/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//i.test(q)) {
            ytUrl = q.trim();
        } else {
            const yt = await ytsearch(q);
            if (!yt.results.length) return reply("No results found!");
            ytUrl = yt.results[0].url;
        }

        const apiUrl = `https://api.zenzxz.my.id/downloader/ytmp3?url=${encodeURIComponent(ytUrl)}`;
        const res = await fetch(apiUrl);
        const data = await res.json();

        if (!data?.status || !data?.download_url) return reply("❌ Download failed. Try again later.");

        // Download audio buffer
        const audioRes = await fetch(data.download_url);
        const audioBuffer = await audioRes.buffer();

        // Send audio
        await conn.sendMessage(from, {
            audio: audioBuffer,
            mimetype: "audio/mpeg",
            fileName: `${data.title || 'song'}.mp3`
        }, { quoted: anony });

    } catch (error) {
        console.error(error);
        reply("An error occurred. Please try again.");
    }
});

cmd({ 
    pattern: "yta", 
    alias: ["play", "audio"], 
    react: "🎧", 
    desc: "Download YouTube song via Zenxz API", 
    category: "main", 
    use: '.yta <query>', 
    filename: __filename 
}, async (conn, mek, m, { from, sender, reply, q }) => { 
    try {
        if (!q) return reply("*Please provide a song name..*");

        const yt = await ytsearch(q);
        if (!yt.results.length) return reply("No results found!");

        const song = yt.results[0];
        const apiUrl = `https://api.zenzxz.my.id/downloader/ytmp3?url=${encodeURIComponent(song.url)}`;
        
        const res = await fetch(apiUrl);
        const data = await res.json();

        if (!data?.status || !data?.download_url) return reply("Download failed. Try again later.");

        await conn.sendMessage(from, {
            audio: { url: data.download_url },
            mimetype: "audio/mpeg",
            fileName: `${data.title || song.title}.mp3`
        }, { quoted: anony });

    } catch (error) {
        console.error(error);
        reply("An error occurred. Please try again.");
    }
});

cmd({
    pattern: "play2",
    alias: ["yta2", "song"],
    react: "🎵",
    desc: "Download high quality YouTube audio via Zenxz API",
    category: "media",
    use: "<song name>",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply("Please provide a song name\nExample: .play2 Tum Hi Ho");

        // Step 1: Search YouTube
        await conn.sendMessage(from, { text: "🔍 Searching for your song..." }, { quoted: anony });
        const yt = await ytsearch(q);
        if (!yt?.results?.length) return reply("❌ No results found. Try a different search term.");

        const vid = yt.results[0];

        const caption =
`*YT AUDIO DOWNLOADER*
╭━━❐━⪼
┇๏ *Title*    –  ${vid.title}
┇๏ *Duration* –  ${vid.timestamp}
┇๏ *Views*    –  ${vid.views}
┇๏ *Author*   –  ${vid.author.name}
╰━━❑━⪼
> *Downloading Audio File ♡*`;

        // Step 2: Send video info with thumbnail
        await conn.sendMessage(from, {
            image: { url: vid.thumbnail },
            caption
        }, { quoted: anony });

        // Step 3: Fetch audio URL using Zenxz API
        const apiUrl = `https://api.zenzxz.my.id/downloader/ytmp3?url=${encodeURIComponent(vid.url)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!data?.status || !data?.download_url) {
            return reply("❌ Failed to fetch audio. Try again later.");
        }

        // Step 4: Download audio buffer
        const audioRes = await fetch(data.download_url);
        const audioBuffer = await audioRes.buffer();

        // Step 5: Send audio
        await conn.sendMessage(from, {
            audio: audioBuffer,
            mimetype: 'audio/mpeg',
            ptt: false,
            fileName: `${data.title || vid.title}.mp3`.replace(/[^\w\s.-]/gi, '')
        }, { quoted: anony });

        // Step 6: React success
        await conn.sendMessage(from, { react: { text: "✅", key: mek.key } });

    } catch (error) {
        console.error('Play2 command error:', error);
        reply("⚠️ An unexpected error occurred. Please try again.");
        await conn.sendMessage(from, { react: { text: "❌", key: mek.key } });
    }
});
 
cmd({ 
    pattern: "play3", 
    alias: ["jadu", "music", "dlyt", "playx"], 
    react: "❄️", 
    desc: "Download YouTube content with options via Zenxz API",
    category: "download", 
    use: '.play3 <Youtube URL or Name>', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try {
        if (!q) return await reply("Please provide a YouTube URL or video name.");

        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        
        let ytmsg = `*🎬 YOUTUBE DOWNLOADER*
╭━━❐━⪼
┇๏ *Title* - ${yts.title}
┇๏ *Duration* - ${yts.timestamp}
┇๏ *Views* - ${yts.views}
┇๏ *Author* - ${yts.author.name}
╰━━❑━⪼
📌 *Reply with the number to download*
1. Video (MP4)
2. Audio (MP3) 
3. Voice Note (PTT) 
4. Document (MP4)
5. Document (MP3) 
> *© Powered By TERRI ♡*`;

        // Send video details with thumbnail
        const sentMsg = await conn.sendMessage(from, { 
            image: { url: yts.thumbnail }, 
            caption: ytmsg 
        }, { quoted: anony });

        const messageID = sentMsg.key.id;
        let responded = false;

        // Create a listener for the reply
        const replyHandler = async (msgData) => {
            const receivedMsg = msgData.messages[0];
            if (!receivedMsg.message || responded) return;

            const receivedText = receivedMsg.message.conversation || 
                                receivedMsg.message.extendedTextMessage?.text;
            const senderID = receivedMsg.key.remoteJid;
            const isReplyToBot = receivedMsg.message.extendedTextMessage?.contextInfo?.stanzaId === messageID;

            if (isReplyToBot && senderID === from) {
                if (!['1','2','3','4','5'].includes(receivedText)) {
                    await conn.sendMessage(from, { 
                        text: "❌ Invalid option! Please reply with 1, 2, 3, 4, or 5." 
                    }, { quoted: receivedMsg });
                    return;
                }

                responded = true;
                conn.ev.off("messages.upsert", replyHandler);

                await conn.sendMessage(from, {
                    react: { text: '⬇️', key: receivedMsg.key }
                });

                try {
                    // Use appropriate API based on selection
                    let apiUrl;
                    if (receivedText === "1" || receivedText === "4") {
                        // Video download
                        apiUrl = `https://api.zenzxz.my.id/downloader/ytmp4?url=${encodeURIComponent(yts.url)}`;
                    } else {
                        // Audio download
                        apiUrl = `https://api.zenzxz.my.id/downloader/ytmp3?url=${encodeURIComponent(yts.url)}`;
                    }

                    const apiResponse = await fetch(apiUrl);
                    const apiData = await apiResponse.json();
                    
                    if (!apiData.status || !apiData.download_url) {
                        throw new Error("Failed to get download URL");
                    }

                    const downloadUrl = apiData.download_url;
                    const sanitizedTitle = (apiData.title || yts.title).replace(/[^\w\s]/gi, '').substring(0, 50);

                    // Download the media file
                    const mediaRes = await fetch(downloadUrl);
                    const mediaBuffer = await mediaRes.buffer();

                    switch (receivedText) {
                        case "1":
                            // Video download
                            await conn.sendMessage(from, { 
                                video: mediaBuffer,
                                caption: "> *Powered By Terri🤍*"
                            }, { quoted: receivedMsg });
                            break;
                            
                        case "2":
                            // Audio download
                            await conn.sendMessage(from, { 
                                audio: mediaBuffer,
                                mimetype: "audio/mpeg",
                                fileName: `${sanitizedTitle}.mp3`
                            }, { quoted: receivedMsg });
                            break;
                            
                        case "3":
                            // Voice note (PTT)
                            const convertedPTT = await converter.toPTT(mediaBuffer, 'mp3');
                            await conn.sendMessage(from, { 
                                audio: convertedPTT,
                                ptt: true,
                                fileName: `${sanitizedTitle}.opus`
                            }, { quoted: receivedMsg });
                            break;
                            
                        case "4":
                            // Document (Video)
                            await conn.sendMessage(from, { 
                                document: mediaBuffer,
                                mimetype: "video/mp4",
                                fileName: `${sanitizedTitle}.mp4`
                            }, { quoted: receivedMsg });
                            break;
                            
                        case "5":
                            // Document (Audio)
                            await conn.sendMessage(from, { 
                                document: mediaBuffer,
                                mimetype: "audio/mpeg",
                                fileName: `${sanitizedTitle}.mp3`
                            }, { quoted: receivedMsg });
                            break;
                    }
                } catch (error) {
                    console.error("Download error:", error);
                    await conn.sendMessage(from, { 
                        text: "❌ Failed to download. Please try again later." 
                    }, { quoted: receivedMsg });
                }
            }
        };

        conn.ev.on("messages.upsert", replyHandler);

        // Set timeout to remove listener after 1 minute
        setTimeout(() => {
            if (!responded) {
                conn.ev.off("messages.upsert", replyHandler);
                conn.sendMessage(from, { 
                    text: "⏰ Timeout: No response received. Please use the command again." 
                }, { quoted: sentMsg });
            }
        }, 60000);

    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
});

// Add video download command
cmd({ 
    pattern: "ytv", 
    alias: ["playv", "video"], 
    react: "🎥", 
    desc: "Download YouTube video via Zenxz API", 
    category: "download", 
    use: '.ytv <query or youtube url>', 
    filename: __filename 
}, async (conn, mek, m, { from, sender, reply, q }) => { 
    try {
        if (!q) return reply("*Please provide a video name or YouTube link.*");

        let ytUrl = '';
        if (/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//i.test(q)) {
            ytUrl = q.trim();
        } else {
            const yt = await ytsearch(q);
            if (!yt.results.length) return reply("No results found!");
            ytUrl = yt.results[0].url;
        }

        const apiUrl = `https://api.zenzxz.my.id/downloader/ytmp4?url=${encodeURIComponent(ytUrl)}`;
        const res = await fetch(apiUrl);
        const data = await res.json();

        if (!data?.status || !data?.download_url) return reply("❌ Download failed. Try again later.");

        // Send video
        await conn.sendMessage(from, {
            video: { url: data.download_url },
            caption: `*${data.title || 'YouTube Video'}*`
        }, { quoted: anony });

    } catch (error) {
        console.error(error);
        reply("An error occurred. Please try again.");
    }
});