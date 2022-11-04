let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (!text) throw "Nama grup mya manaa!"
  await conn.groupUpdateSubject(m.chat, text)
 m.reply(`${text ? `${text}` : 'None'} Adalah nama Grup`)
}
handler.help = ['setname <teks>']
handler.tags = ['group']
handler.command = /^setnamegc|setnamagc$/i
handler.botAdmin = true
handler.group = true
handler.admin = true
export default handler
