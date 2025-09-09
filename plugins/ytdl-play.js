const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); 
const converter = require('../data/play-converter');
const fetch = require('node-fetch');
const { anony } = require('../lib/terri');

cmd({ 
    pattern: "yta", 
    alias: ["play", "audio"], 
    react: "🎧", 
    desc: "Download YouTube song via Nexoracle API", 
    category: "main", 
    use: '.yta <query>', 
    filename: __filename 
}, async (conn, mek, m, { from, sender, reply, q }) => { 
    try {
        if (!q) return reply("*Please provide a song name..*");

        const yt = await ytsearch(q);
        if (!yt.results.length) return reply("No results found!");

        const song = yt.results[0];
        const apiUrl = `https://api.nexoracle.com/downloader/yt-audio2?apikey=MatrixZatKing&url=${encodeURIComponent(song.url)}`;
        
        const res = await fetch(apiUrl);
        const data = await res.json();

        if (!data?.status || !data?.result?.audio) return reply("Download failed. Try again later.");

        await conn.sendMessage(from, {
            audio: { url: data.result.audio },
            mimetype: "audio/mpeg",
            fileName: `${data.result.title || song.title}.mp3`
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
    desc: "Download high quality YouTube audio via Nexoracle API",
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

        // Step 3: Fetch audio URL using Nexoracle API
        const apiUrl = `https://api.nexoracle.com/downloader/yt-audio2?apikey=MatrixZatKing&url=${encodeURIComponent(vid.url)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!data?.status || !data?.result?.audio) {
            return reply("❌ Failed to fetch audio. Try again later.");
        }

        // Step 4: Download audio buffer
        const audioRes = await fetch(data.result.audio);
        const audioBuffer = await audioRes.buffer();

        // Step 5: Send audio
        await conn.sendMessage(from, {
            audio: audioBuffer,
            mimetype: 'audio/mpeg',
            ptt: false,
            fileName: `${data.result.title || vid.title}.mp3`.replace(/[^\w\s.-]/gi, '')
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
    desc: "Download YouTube content with options via Nexoracle API",
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
1. Audio (MP3) 
2. Voice Note (PTT) 
3. Document (MP3) 
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
                if (!['1','2','3'].includes(receivedText)) {
                    await conn.sendMessage(from, { 
                        text: "❌ Invalid option! Please reply with 1, 2, or 3." 
                    }, { quoted: receivedMsg });
                    return;
                }

                responded = true;
                conn.ev.off("messages.upsert", replyHandler);

                await conn.sendMessage(from, {
                    react: { text: '⬇️', key: receivedMsg.key }
                });

                try {
                    // Use Nexoracle API for audio
                    const apiUrl = `https://api.nexoracle.com/downloader/yt-audio2?apikey=MatrixZatKing&url=${encodeURIComponent(yts.url)}`;

                    const apiResponse = await fetch(apiUrl);
                    const apiData = await apiResponse.json();
                    
                    if (!apiData.status || !apiData.result?.audio) {
                        throw new Error("Failed to get download URL");
                    }

                    const downloadUrl = apiData.result.audio;
                    const sanitizedTitle = (apiData.result.title || yts.title).replace(/[^\w\s]/gi, '').substring(0, 50);

                    // Download the media file
                    const mediaRes = await fetch(downloadUrl);
                    const mediaBuffer = await mediaRes.buffer();

                    switch (receivedText) {
                        case "1":
                            // Audio download
                            await conn.sendMessage(from, { 
                                audio: mediaBuffer,
                                mimetype: "audio/mpeg",
                                fileName: `${sanitizedTitle}.mp3`
                            }, { quoted: receivedMsg });
                            break;
                            
                        case "2":
                            // Voice note (PTT)
                            const convertedPTT = await converter.toPTT(mediaBuffer, 'mp3');
                            await conn.sendMessage(from, { 
                                audio: convertedPTT,
                                ptt: true,
                                fileName: `${sanitizedTitle}.opus`
                            }, { quoted: receivedMsg });
                            break;
                            
                        case "3":
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