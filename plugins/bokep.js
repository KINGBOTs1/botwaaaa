let handler = async (m, { conn }) => {
conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Nih Jngn comly  ya', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}
handler.help = ['bkp', 'bokep']
handler.tags = ['bokep']

handler.command = /^(bkp|bokep)$/i
handler.premium = true
export default handler
