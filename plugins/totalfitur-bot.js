import { plugins } from '../lib/plugins.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	let menu = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
	let txt = `*[ MENU TERSEDIA ]*\n\n`
	txt += `*• Aktif :* ${menu.length} fitur\n`
	await m.reply(txt)
}

handler.help = ['totalfitur']
handler.tags = ['tools']
handler.command = /^(ft|total(ft?|fitur|cmd|command))$/i

export default handler
