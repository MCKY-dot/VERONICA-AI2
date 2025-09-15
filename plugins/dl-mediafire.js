const axios = require("axios");
const { cmd } = require("../command");
const { anony } = require('../lib/terri');

cmd({
  pattern: "mediafire",
  alias: ["mfire", "mfdownload"],
  react: '📥',
  desc: "Download files from MediaFire",
  category: "download",
  use: ".mediafire <MediaFire URL>",
  filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
  try {
    const url = args[0];
    if (!url || !url.includes("mediafire.com")) {
      return reply("❌ Please provide a valid MediaFire URL\nExample: .mediafire https://www.mediafire.com/file/...");
    }

    await conn.sendMessage(from, { react: { text: '⏳', key: m.key } });

    const apiUrl = `https://api.nekolabs.my.id/downloader/mediafire?url=${encodeURIComponent(url)}`;
    const { data } = await axios.get(apiUrl);

    if (!data || !data.status || !data.result || !data.result.download_url) {
      return reply("❌ Failed to fetch file info. Invalid URL or API error.");
    }

    const fileInfo = data.result;
    
    await reply(`📥 Downloading File (${fileInfo.filesize})...`);

    const fileResponse = await axios.get(fileInfo.download_url, { 
      responseType: 'arraybuffer',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const fileBuffer = Buffer.from(fileResponse.data);

    const messageOptions = {
      document: fileBuffer,
      fileName: fileInfo.filename,
      mimetype: fileInfo.mimetype,
      caption: `*MediaFire Download*\n\n📄 *Filename:* ${fileInfo.filename}\n📦 *Size:* ${fileInfo.filesize}\n📅 *Uploaded:* ${fileInfo.uploaded}\n\nPowered by VERONICA-AI`
    };

    await conn.sendMessage(from, messageOptions, { quoted: anony });
    await conn.sendMessage(from, { react: { text: '✅', key: m.key } });

  } catch (error) {
    console.error("MediaFire Error:", error);
    reply("❌ Failed to download file. Please try again later.");
    await conn.sendMessage(from, { react: { text: '❌', key: m.key } });
  }
});
