//
const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const gs = require('nekos.life')
const neko = new gs()

let handler  = async (m, { conn, text }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
	m.reply(wait)
  pp = (await neko.nsfw.nekoGif()).url
                     await sticker(false, pp, global.packname, author).then(gege => {
                     conn.sendMessage(m.chat, gege, 'stickerMessage', { quoted: m })
                     })
  //if (!text) throw 'Uhm...Teksnya?'
}
handler.help = ['hnekogif']
handler.tags = ['hentai']
handler.command = /^hnekogif$/i


export default handler