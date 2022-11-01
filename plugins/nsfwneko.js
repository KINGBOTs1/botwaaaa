let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
m.reply(wait)
await conn.sendButtonImg(m.chat, await ( await fetch(`https://api.lolhuman.xyz/api/random/nsfw/neko?apikey=rey2k21`)).buffer(), kasihcaption, footer, 'Next', `${usedPrefix + command}`, m, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.help = ['nsfwneko']
handler.tags = ['hentai']

handler.command = /^(nsfwneko)$/i


export default handler
