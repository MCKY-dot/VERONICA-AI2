const { cmd } = require('../command');
const config = require('../config');

cmd({
    'pattern': 'owner',
    'react': '🦋',
    'desc': 'Get owner number',
    'category': 'main',
    'filename': __filename
}, async (m, sock, msg, { from }) => {
    try {
        const ownerNumber = config.OWNER_NUMBER;
        const ownerName = config.OWNER_NAME;
        
        // Create vcard
        const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${ownerName}
TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}
END:VCARD`;
        
        // Send contact
        await sock.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });
        
        // Send image with caption
        await sock.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/p4otel.jpg' },
            caption: `╭━━〔 *VERONICA AI* 〕━━┈⊷
┃❍╭─────────────·๏
┃❍┃• *Here is the owner details*
┃❍┃• *ɴᴀᴍᴇ* - ${ownerName}
┃❍┃• *ɴᴜᴍʙᴇʀ* ${ownerNumber}
┃❍┃• *𝖵ᴇʀsɪᴏɴ*: 1.0.0
┃❍└───────────┈⊷
╰──────────────┈⊷
> ©Tᴇʀʀɪ`,
            contextInfo: {
                mentionedJid: [ownerNumber.replace('+', '') + '@s.whatsapp.net'],
                forwardingScore: 999,
                isForwarded: true
            }
        }, { quoted: msg });
        
        // Send audio
        await sock.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/eqfc2j.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: msg });
        
    } catch (error) {
        console.error(error);
        // Make sure 'reply' function is available or use sock.sendMessage instead
        await sock.sendMessage(from, { 
            text: `An error occurred: ${error.message}` 
        }, { quoted: msg });
    }
});
