const config = require('../config');
const { makeWASocket } = require(config.BAILEYS);
const conn = makeWASocket({
});

module.exports = conn;
