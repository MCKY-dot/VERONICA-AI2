const { cmd } = require('../command');
const config = require("../config");

// Anti-Bad Words System
cmd({
  'on': "body"
}, async (conn, m, store, {
  from,
  body,
  isGroup,
  isAdmins,
  isBotAdmins,
  reply,
  sender
}) => {
  try {
    const badWords = [
  "wtf", "mia", "xxx", "fuck", 'sex', "huththa", "pakaya", 'ponnaya', "hutto","shit", "asshole", "bitch", "bastard", "dick", "piss", "cunt", "pussy", "cock", "damn", "hell",
  "crap", "douchebag", "jackass", "shitass", "dipshit", "shithead", "dickhead", "prick", "whore", "slut","blowjob", "handjob", "bj", "ejaculate", "cum", "jizz", "orgasm", "orgy", "penis", "vagina", "boobs",
  "tits", "titty", "anal", "blow job", "hand job", "nude", "naked", "masterbate", "masturbation", "erotic","porn", "porno", "pornography", "xxx", "hardcore", "nigger", "nigga", "chink", "gook", "kike", "spic", "wetback", "retard", "fag", "faggot", "dyke", "tranny",
  "idiot", "moron", "stupid", "retard", "loser", "scum", "fatso", "ugly", "freak", "weirdo", "psycho", "lunatic", "kill", "murder", "suicide", "die", "attack", "hurt", "shot", "bomb", "terrorist", "hitman", "assassinate",
  "f u c k", "s h i t", "b i t c h", "a s s", "$#!+", "f*ck", "f**k", "sh!t", "b!tch", "@$$", "5h1t",
  "fuk", "fack", "sheisse", "scheisse",
  "puta", "culo", "verga", "carajo",
  "chutiya", "bhenchod", "madarchod", "lund",
];

    if (!isGroup || isAdmins || !isBotAdmins) {
      return;
    }

    const messageText = body.toLowerCase();
    const containsBadWord = badWords.some(word => messageText.includes(word));

    if (containsBadWord && config.ANTI_BAD_WORD === "true") {
      await conn.sendMessage(from, { 'delete': m.key }, { 'quoted': m });
      await conn.sendMessage(from, { 'text': "🚫 ⚠️ BAD WORDS NOT ALLOWED ⚠️ 🚫" }, { 'quoted': m });
    }
  } catch (error) {
    console.error(error);
    reply("An error occurred while processing the message.");
  }
});
