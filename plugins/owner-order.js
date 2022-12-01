let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `
.order
┏━━❉ *ORDER* ❉━━┓
┃  *ID* :  
┃  *SERVER* : 
┃  *USERNAME* : 
┃  *ORDER* :
┗━━━━━━━━━━━━━━`
    if (text.length < 1 ) throw `Laporan terlalu pendek, minimal 10 karakter!`
    if (text.length > 1000) throw `Laporan terlalu panjang, maksimal 1000 karakter!`
    let teks = `* ${text}\n*- @${m.sender.split`@`[0]}*`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply('☑️ Pesan Telah terkirim ke Owner!\n_*Menunggu confirmasi Dari Owner...*_')
}
handler.command = /^(orderr)$/i
export default handler