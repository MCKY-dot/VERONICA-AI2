
const axios = require('axios');
const { anony } = require('../lib/terri');
const config = require('../config')
const {cmd , commands} = require('../command')
const googleTTS = require('google-tts-api')

cmd({
    pattern: "tts",
    desc: "Text to speech conversion",
    category: "tools",
    react: "🔊",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Need some text.")
    const url = googleTTS.getAudioUrl(q, {
  lang: 'en-US', // Changed from 'hi-IN' to 'en-US' for English
  slow: false,
  host: 'https://translate.google.com',
})
await conn.sendMessage(from, { audio: { url: url }, mimetype: 'audio/mpeg', ptt: true }, { quoted: anony })
    }catch(a){
reply(`${a}`)
}
})

// Credit Card Generator Command
cmd({
    pattern: "card",
    desc: "Generate virtual credit cards - use .card <type> or .card to list types",
    category: "tools",
    react: "💳",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    // Available card types
    const validTypes = ['american-express', 'mastercard', 'visa', 'jcb'];
    
    // If no type specified, show available types
    if (!q) {
        const message = `*💳 AVAILABLE CARD TYPES*\\n\\n` +
                       `${validTypes.map(type => `• ${type}`).join('\\n')}\\n\\n` +
                       `*Usage:* .card <type>\\n` +
                       `*Examples:*\\n` +
                       `.card visa\\n` +
                       `.card mastercard\\n` +
                       `.card american-express\\n` +
                       `.card jcb`;
        return reply(message);
    }

    // Get card type from query
    let cardType = q.toLowerCase();
    
    // Validate card type
    if (!validTypes.includes(cardType)) {
        return reply(`❌ Invalid card type!\\n\\n*Available types:* ${validTypes.join(', ')}\\n\\n*Example:* .card visa`);
    }

    // Make API request
    const response = await axios.get(`https://api.nekolabs.my.id/tools/vcc-generator?type=${cardType}`);
    
    if (!response.data.status || !response.data.result || response.data.result.length === 0) {
        return reply("❌ Failed to generate cards. Please try again.");
    }

    // Format the response
    const cards = response.data.result;
    let message = `*💳 VIRTUAL CREDIT CARDS*\\n*Type:* ${cardType.toUpperCase()}\\n\\n`;
    
    cards.forEach((card, index) => {
        message += `*Card ${index + 1}:*\\n` +
                  `📛 *Name:* ${card.name}\\n` +
                  `🔢 *Number:* \`${card.number}\\`\\n` +
                  `🔒 *CVV:* \`${card.cvv}\\`\\n` +
                  `📅 *Expiry:* ${card.expiry}\\n` +
                  `🏷️ *Type:* ${card.type}\\n\\n`;
    });

    message += "*⚠️ Disclaimer:* These are test cards for development purposes only. Do not use for real transactions.";

    await reply(message);

    } catch (error) {
        console.error("Card generation error:", error);
        reply("❌ Error generating cards. Please try again later.");
    }
})
