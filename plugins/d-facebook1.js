import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (!text) throw '*Masukkan link*\n Example: https://www.facebook.com/DramaFacbook21/videos/1775049149358700/?app=fbl'
let res = await axios('https://api.akuari.my.id/downloader/fbdl3?link=' + text)
let json = res.data
let dapet = json.hasil.url
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + 'š Quality: ' + v.subname,
		description: '\nā ID: ' + json.hasil.id + '\nā²ļø Title: ' + json.hasil.meta.title + '\nš URL: ' + v.url + '\nš Source: ' + json.hasil.meta.source + '\nšļø Views: ' + json.hasil.meta.duration + '\nš SD: ' + json.hasil.sd.url + '\n\nš HD: ' + json.hasil.hd.url,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let button = {
		buttonText: `āļø ${command} Search Disini āļø`,
		description: `ā” Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
    }

handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((facebook|fb)(downloder|dl)?)$/i

export default handler
