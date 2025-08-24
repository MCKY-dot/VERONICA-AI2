const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["terri","whois"], 
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
*╭━〔 VERONICA AI 〕━┈⊷*
*👋 HELLO _${pushname}_*
*╰────────────┈⊷*

> *╭━━〔 MY ABOUT 〕━┈⊷*
> *┃★╭──────────*
> *┃★│* *ᴄʀᴇᴀᴛᴇʀ : ᴛᴇʀʀɪ*
> *┃★│* *ʀᴇᴀʟ ɴᴀᴍᴇ : Uᴛʜᴜᴍᴀɴ*
> *┃★│* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ : TERRI*
> *┃★│* *ᴀɢᴇ : 18 ʏᴇᴀʀ*
> *┃★│* *ᴄɪᴛʏ : 🤪*

*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇʀʀɪ*
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:`https://files.catbox.moe/ltc93o.jpg`},caption:about,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363397100406773@newsletter',
      newsletterName: 'Vᴇʀᴏɴɪᴄᴀ Aɪ',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
