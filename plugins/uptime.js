const { cmd } = require('../command');
const moment = require('moment-timezone');

cmd({
  pattern: "uptime",
  alias: ["up"],
  desc: "Check how long the bot has been online.",
  category: "system",
  filename: __filename,
}, async (Void, m, text) => {
  const runtime = () => {
    let seconds = process.uptime();
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = Math.floor(seconds % 60);
    return `${hours}h ${minutes}m ${secs}s`;
  };

  const fakeContact = {
    key: {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast"
    },
    message: {
      contactMessage: {
        displayName: "𝗩𝗘𝗥𝗢𝗡𝗜𝗖𝗔",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:𝗩𝗘𝗥𝗢𝗡𝗜𝗖𝗔\nORG:𝗧𝗲𝗿𝗿𝗶;\nTEL;type=CELL;type=VOICE;waid=254700000000:+254 700 000000\nEND:VCARD`,
        jpegThumbnail: Buffer.alloc(0)
      }
    }
  };

  const uptimeText = `*🤖 𝗩𝗲𝗿𝗼𝗻𝗶𝗰𝗮 Bot Uptime:*\n🕒 ${runtime()}\n💡 The bot has been running without interruption.`;

  await Void.sendMessage(m.chat, {
    text: uptimeText,
    contextInfo: {
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363397100406773@newsletter",
        newsletterName: "ᐯᗴᖇOᑎIᑕᗩ"
      },
      externalAdReply: {
        title: "𝚅𝙴𝚁𝙾𝙽𝙸𝙲𝙰 𝙰𝙸",
        body: "Uptime Monitor by ᐯᗴᖇOᑎIᑕᗩ ᗩI",
        thumbnailUrl: "https://files.catbox.moe/ue0vkz.jpg",
        mediaType: 1,
        renderLargerThumbnail: true,
        showAdAttribution: true,
        sourceUrl: "https://github.com/Terrizev"
      }
    }
  }, { quoted: fakeContact });
});
