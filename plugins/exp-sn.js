import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix }) {
  let sn = createHash('md5').update(m.sender).digest('hex')

m.reply(`*SN:* ${sn}\n`)
}

handler.command = /^(sn)$/i
handler.register = true
handler.private = true
export default handler