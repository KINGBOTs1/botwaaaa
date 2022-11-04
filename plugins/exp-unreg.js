import { createHash } from 'crypto'
import db from '../lib/database.js'
let handler = async function (m, { args }) {
  if (!args[0]) throw '📮Serial Number kosong \n Cek SN menggunakan .sn'
  let user = db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '🚫Serial Number salah'
  user.registered = false
  m.reply('📛Kamu Berhasil keluar dari database\n\nKING BOTZ')
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['xp']

handler.command = /^unreg(ister)?$/i
handler.register = true
handler.private = true
export default handler
