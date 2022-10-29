import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import fs from 'fs'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/image/g.test(mime) && !/webp/g.test(mime)) {
    	let ztick = fs.readFileSync(`./media/sticker/bronya.webp`)
    	try {
			let img = await q.download?.()
			let out = await uploadImage(img)
			const res = `https://botcahx.ddns.net/api/maker/trigger?url=${out}`
			const stiker = await sticker(false, res, global.packname, global.author)
	        await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    	} catch (e) {
    		console.log(e)
	        await conn.sendFile(m.chat, ztick, 'sticker.webp', '', m)
    	}
    } else {
    	m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
    }
}

handler.help = ['trigger']
handler.tags = ['sticker']
handler.command = /^(trigger(ed)?)$/i

handler.premium = false
handler.limit = true

export default handler
