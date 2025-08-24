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
        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + ('FN:' + ownerName + '\n') + ('TEL;type=CELL;type=VOICE;waid=' + ownerNumber.replace('+', '') + ':' + ownerNumber + '\n') + 'END:VCARD';
        const contactMessage = await sock.sendMessage(from, {
            'contacts': {
                'displayName': ownerName,
                'contacts': [{
                    'vcard': vcard
                }]
            }
        });
        await sock.sendMessage(from, {
            'image': {
                'url': 'https://files.catbox.moe/p4otel.jpg'
            },
            'caption': '╭━━〔 *VERONICA AI* 〕━━┈⊷\n┃❍╭─────────────·๏\n┃❍┃• *Here is the owner details*\n┃❍┃• *ɴᴀᴍᴇ* - ' + ownerName + '\n┃❍┃• *ɴᴜᴍʙᴇʀ* ' + ownerNumber + '\n┃❍┃• *𝖵ᴇʀsɪᴏɴ*: 1.0.0\n┃❍└───────────┈⊷\n╰──────────────┈⊷\n> ©Tᴇʀʀɪ',
            'contextInfo': {
                'mentionedJid': [ownerNumber.replace('+', '') + '@s.whatsapp.net'],
                'forwardingScore': 999,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                    'newsletterJid': '120363397100406773@newsletter',
                    'newsletterName': '𝚅𝙴𝚁𝙾𝙽𝙸𝙲𝙰 𝙰𝙸 DEVELOPER🥰💖🥰',
                    'serverMessageId': 143
                }
            }
        }, {
            'quoted': msg
        });
        await sock.sendMessage(from, {
            'audio': {
                'url': 'https://files.catbox.moe/eqfc2j.mp3'
            },
            'mimetype': 'audio/mp4',
            'ptt': true
        }, {
            'quoted': msg
        });
    } catch (error) {
        console.error(error);
        reply('An error occurred: ' + error.message);
    }
});