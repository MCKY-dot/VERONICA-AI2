const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const getRandomImage = () => {
    try {
        const srcPath = path.join(__dirname, '../src');
        const files = fs.readdirSync(srcPath);
        const imageFiles = files.filter(file => 
            file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')
        );
        
        if (imageFiles.length === 0) {
            console.log('No image files found in src folder');
            return 'https://files.catbox.moe/mn9fgn.jpg'; 
        }
        
        const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)];
        return path.join(srcPath, randomImage);
    } catch (e) {
        console.log('Error getting random image:', e);
        return 'https://files.catbox.moe/owuzba.jpg'; 
    }
};

cmd({
    pattern: "menu4",
    desc: "menu the bot",
    category: "menu",
    react: "🪀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const totalCommands = Object.keys(commands).length;
        let dec = `🌟 *Good ${
  new Date().getHours() < 12 ? 'Morning' : 
  (new Date().getHours() < 18 ? 'Afternoon' : 'Evening')
}, ${pushname}!* 🌟
╭《 *V͜͡E͜͡R͜͡O͜͡N͜͡I͜͡C͜͡A͜͡ A͜͡I͜͡* 》┈⊷
┃❍⁠⁠⁠⁠╭──────────
┃❍⁠⁠⁠⁠│▸  Usᴇʀ : ${config.OWNER_NAME}
┃❍⁠⁠⁠⁠│▸  ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs : *${totalCommands}*
┃❍⁠⁠⁠⁠│▸  𝖳ʏᴘᴇ : 𝐍𝐨𝐝𝐞𝐣𝐬
┃❍⁠⁠⁠⁠│▸  ᴘʟᴀᴛғᴏʀᴍ : 𝐇𝐞𝐫𝐨𝐤𝐮
┃❍⁠⁠⁠⁠│▸  𝖣ᴇᴠᴇʟᴏᴘᴇʀ : ᴛᴇʀʀɪ
┃❍⁠⁠⁠⁠│▸  𝖬ᴏᴅᴇ : [${config.MODE}]
┃❍⁠⁠⁠⁠│▸  𝖯ʀᴇғɪx : *[${config.PREFIX}]*
┃❍⁠⁠⁠⁠│▸  ᴛɪᴍᴇ : *${new Date().toLocaleTimeString()}*
┃❍⁠⁠⁠⁠│▸  𝖵ᴇʀsɪᴏɴ : 𝟏.𝟎.𝟎
┃❍⁠⁠⁠⁠╰───────────
╰━━━━━━━━━━━━━━┈⊷
╭━━〔 𝐌𝐄𝐍𝐔𝐋𝐈𝐒𝐓 〕━━┈⊷
┃❍╭─────────────·
┃❍┃• ᴘʀᴀʏᴇʀᴛɪᴍᴇ
┃❍┃• ϙᴜʀᴀɴᴍᴇɴᴜ
┃❍┃• ᴀɪᴍᴇɴᴜ
┃❍┃• ᴀɴɪᴍᴇᴍᴇɴᴜ
┃❍┃• ᴄᴏɴᴠᴇʀᴛᴍᴇɴᴜ
┃❍┃• ғᴜɴᴍᴇɴᴜ
┃❍┃• ʀᴇᴀᴄᴛɪᴏɴᴍᴇɴᴜ
┃❍┃• ᴅʟᴍᴇɴᴜ
┃❍┃• sᴇᴛᴛɪɴɢsᴍᴇɴᴜ
┃❍┃• ʟɪsᴛᴄᴍᴅ
┃❍┃• ᴍᴀɪɴᴍᴇɴᴜ
┃❍┃• ᴛᴇᴍᴘᴍᴀɪʟ
┃❍┃• ɢʀᴏᴜᴘᴍᴇɴᴜ
┃❍┃• ᴀʟʟᴍᴇɴᴜ
┃❍┃• ᴏᴛʜᴇʀᴍᴇɴᴜ
┃❍┃• ᴏᴡɴᴇʀᴍᴇɴᴜ
┃❍┃• ʟᴏɢᴏ<𝐭𝐞𝐱𝐭>
┃❍┃• ʀᴇᴘᴏ
┃❍┃• ʟᴏɢᴏᴍᴇɴᴜ
┃❍┃• ᴀᴅᴜʟᴛᴍᴇɴᴜ
┃❍└──────────┈⊷
╰────────────┈⊷
> ${config.DESCRIPTION}`;
        
        // Contact message for verified context
        const verifiedContact = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: "𝕍𝔼ℝ𝕆ℕ𝕀ℂ𝔸",
                    vcard: "BEGIN:VCARD\nVERSION:3.0\nFN: 𝚅𝙴𝚁𝙾𝙽𝙸𝙲𝙰 𝙰𝙸🧚‍♀️\nORG:VERONICA BOT;\nTEL;type=CELL;type=VOICE;waid=93775551335:+256784670936\nEND:VCARD"
                }
            }
        };

        await conn.sendMessage(
            from,
            {
                image: { url: getRandomImage() },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363397100406773@newsletter',
                        newsletterName: '𝕍𝔼ℝ𝕆ℕ𝕀ℂ𝔸 𝔸𝕀👻⚡',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: verifiedContact }
        );

        const audioUrls = [
            'https://files.catbox.moe/i9g2jx.mp3'
        ];
        const randomAudioUrl = audioUrls[Math.floor(Math.random() * audioUrls.length)];

        await conn.sendMessage(from, {
            audio: { url: randomAudioUrl },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: verifiedContact });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// dlmenu

cmd({
    pattern: "dlmenu",
    desc: "menu the bot",
    category: "menu",
    react: "💚",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
╭━━〔 Download Menu 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• facebook
┃◈┃• mediafire
┃◈┃• tiktok
┃◈┃• twitter
┃◈┃• Insta
┃◈┃• apk
┃◈┃• img
┃◈┃• spotify
┃◈┃• play
┃◈┃• play2
┃◈┃• play3
┃◈┃• tt2
┃◈┃• audio
┃◈┃• playx
┃◈┃• video
┃◈┃• video1
┃◈┃• ytmp3
┃◈┃• ytmp4
┃◈┃• pdf
┃◈┃• sss
┃◈┃• song
┃◈┃• darama
┃◈┃• git
┃◈┃• gdrive
┃◈┃• smovie
┃◈┃• baiscope 
┃◈┃• ginisilia 
┃◈┃• bible
┃◈┃• xxx
┃◈┃• mp3
┃◈┃• mp4 
┃◈┃• gemini
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/mn9fgn.jpg' },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363397100406773@newsletter',
                        newsletterName: 'VERONICA AI 💖🦄',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// group menu

cmd({
    pattern: "groupmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🥰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
 ╭━━〔 Group Menu 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• grouplink
┃◈┃• kickall
┃◈┃• kickall2
┃◈┃• kickall3
┃◈┃• add
┃◈┃• remove
┃◈┃• kick
┃◈┃• promote 
┃◈┃• demote
┃◈┃• dismiss 
┃◈┃• revoke
┃◈┃• setgoodbye
┃◈┃• setwelcome
┃◈┃• delete 
┃◈┃• getpic
┃◈┃• ginfo
┃◈┃• delete 
┃◈┃• disappear on
┃◈┃• disappear off
┃◈┃• disappear 7D,24H
┃◈┃• allreq
┃◈┃• updategname
┃◈┃• updategdesc
┃◈┃• joinrequests
┃◈┃• senddm
┃◈┃• nikal
┃◈┃• mute
┃◈┃• unmute
┃◈┃• lockgc
┃◈┃• unlockgc
┃◈┃• invite
┃◈┃• tag
┃◈┃• hidetag
┃◈┃• tagall
┃◈┃• tagadmins
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/mn9fgn.jpg' },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363397100406773@newsletter',
                        newsletterName: 'VERONICA AI  💖🦄',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

cmd({
    pattern: "reactionmenu",
    desc: "Shows the reaction commands",
    category: "menu",
    react: "💫",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        let dec = `
 ╭━━〔 Reactions Menu 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• bully 
┃◈┃• cuddle 
┃◈┃• cry 
┃◈┃• hug 
┃◈┃• awoo 
┃◈┃• kiss 
┃◈┃• lick 
┃◈┃• pat 
┃◈┃• smug 
┃◈┃• bonk
┃◈┃• yeet 
┃◈┃• blush 
┃◈┃• smile
┃◈┃• wave 
┃◈┃• highfive 
┃◈┃• handhold 
┃◈┃• nom 
┃◈┃• bite 
┃◈┃• glomp 
┃◈┃• slap
┃◈┃• kill
┃◈┃• happy
┃◈┃• wink 
┃◈┃• poke 
┃◈┃• dance 
┃◈┃• cringe 
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/oli59a.jpg' },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363397100406773@newsletter',
                        newsletterName: 'VERONICA AI  💖🦄',
                        serverMessageId: 144
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// fun menu

cmd({
    pattern: "funmenu",
    desc: "menu the bot",
    category: "menu",
    react: "😎",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
 ╭━━〔 Fun Menu 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• insult
┃◈┃• compatibility
┃◈┃• aura
┃◈┃• roast
┃◈┃• compliment
┃◈┃• lovetest
┃◈┃• emoji
┃◈┃• ringtone 
┃◈┃• pickup
┃◈┃• ship
┃◈┃• character
┃◈┃• hack
┃◈┃• joke
┃◈┃• hrt
┃◈┃• hpy
┃◈┃• syd
┃◈┃• anger
┃◈┃• shy
┃◈┃• kiss
┃◈┃• mon
┃◈┃• cunfuzed
┃◈┃• setpp
┃◈┃• hand
┃◈┃• nikal
┃◈┃• hold
┃◈┃• hug
┃◈┃• nikal
┃◈┃• hifi
┃◈┃• poke
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/mn9fgn.jpg' },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363397100406773@newsletter',
                        newsletterName: 'VERONICA AI  💖🦄',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// settings menu

cmd({
    pattern: "settingsmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
     〘 𝖲𝖤𝖳𝖳𝖨𝖭𝖦𝖲 𝗠𝗘𝗡𝗨 〙

╭─────────────⪼
┋ ☻ setprefix 
┋ ☻ statusview
┋ ☻ mode
┋ ☻ statusreply
┋ ☻ alwaysonline
┋ ☻ autorecording
┋ ☻ autotyping
┋ ☻ setbotnumber
┋ ☻ autovoice
┋ ☻ autosticker
┋ ☻ autoreply
┋ ☻ autoreply
┋ ☻ statusreact
┋ ☻ autoreact
┋ ☻ welcome
┋ ☻ customreacts
┋ ☻ antibad
┋ ☻ antibot
┋ ☻ antilink
┋ ☻ readmessage
┋ ☻ settings
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/mn9fgn.jpg' },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363397100406773@newsletter',
                        newsletterName: 'VERONICA AI ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// other menu

cmd({
    pattern: "othermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
╭━━〔 Other Menu 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• vv
┃◈┃• pair
┃◈┃• pair2
┃◈┃• fact
┃◈┃• font
┃◈┃• define
┃◈┃• news
┃◈┃• movie
┃◈┃• weather
┃◈┃• srepo
┃◈┃• insult
┃◈┃• save
┃◈┃• wikipedia
┃◈┃• gpass
┃◈┃• githubstalk
┃◈┃• yts
┃◈┃• ytv
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/mn9fgn.jpg' },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363351424590490@newsletter',
                        newsletterName: 'VERONICA AI  💖🦄',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// main menu

cmd({
    pattern: "mainmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🗿",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
 ╭━━〔 Main Menu 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ping
┃◈┃• live 
┃◈┃• alive
┃◈┃• runtime
┃◈┃• uptime 
┃◈┃• repo
┃◈┃• owner
┃◈┃• menu
┃◈┃• menu2
┃◈┃• restart
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/oli59a.jpg' },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363397100406773@newsletter',
                        newsletterName: 'VERONICA AI  💖🦄',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// owner menu

cmd({
    pattern: "ownermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🔰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
 ╭━━〔 Owner Menu 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• owner
┃◈┃• menu
┃◈┃• menu2
┃◈┃• listcmd
┃◈┃• allmenu
┃◈┃• repo
┃◈┃• block
┃◈┃• unblock
┃◈┃• fullpp
┃◈┃• setpp
┃◈┃• restart
┃◈┃• shutdown
┃◈┃• updatecmd
┃◈┃• alive
┃◈┃• ping 
┃◈┃• gjid
┃◈┃• jid
┃◈┃• casey
┃◈┃• tinyurl 
┃◈┃• bibelist
┃◈┃• get
┃◈┃• Terminate
┃◈┃• family 
┃◈┃• test
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/mn9fgn.jpg' },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363397100406773@newsletter',
                        newsletterName: 'VERONICA AI  💖🦄',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// convert menu

cmd({
    pattern: "convertmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🥀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
╭━━〔 Convert Menu 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• sticker
┃◈┃• sticker2
┃◈┃• fancy
┃◈┃• photo
┃◈┃• take
┃◈┃• tomp3
┃◈┃• tts
┃◈┃• trt
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/mn9fgn.jpg' },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363397100406773@newsletter',
                        newsletterName: 'VERONICA AI  💖🦄',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// anime menu 

cmd({
    pattern: "animemenu",
    desc: "menu the bot",
    category: "menu",
    react: "🧚",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 Anime Menu 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• fack
┃◈┃• dog
┃◈┃• awoo
┃◈┃• garl
┃◈┃• waifu
┃◈┃• neko
┃◈┃• megnumin
┃◈┃• neko
┃◈┃• maid
┃◈┃• loli
┃◈┃• animegirl
┃◈┃• animegirl
┃◈┃• animegirl1
┃◈┃• animegirl2
┃◈┃• animegirl3
┃◈┃• animegirl4
┃◈┃• animegirl5
┃◈┃• anime1
┃◈┃• anime1
┃◈┃• anime2
┃◈┃• anime3
┃◈┃• anime4
┃◈┃• anime5
┃◈┃• animenews
┃◈┃• foxgirl
┃◈┃• naruto
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: 'https://i.ibb.co/8gHCXCV9/IMG-20250216-WA0009.jpg' },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363397100406773@newsletter',
                        newsletterName: 'VERONICA AI  💖🦄',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// ai menu 

cmd({
    pattern: "aimenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
 ╭━━〔 Ai Menu 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ai
┃◈┃• gpt
┃◈┃• meta
┃◈┃• blackbox
┃◈┃• gpt3
┃◈┃• bing
┃◈┃• gemini
┃◈┃• copilot
┃◈└─────────┈⊷
╰───────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/oli59a.jpg' },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363397100406773@newsletter',
                        newsletterName: 'VERONICA AI 💖🦄',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
