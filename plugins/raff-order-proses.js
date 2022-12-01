import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (text.length < 1 ) throw `Laporan terlalu pendek, minimal 10 karakter!`
    if (text.length > 1000) throw `Laporan terlalu panjang, maksimal 1000 karakter!`
    let number = `${m.sender.split`@`[0]}`
    let pesan = `${text}`
    conn.reply(global.nomorown + '@s.whatsapp.net', pesan, null, {
        buttons: [{
            'buttonId': `.raffproses ${number}|${pesan}`,
            'buttonText': {
                'displayText': ' PROSES '
            },
            'type': 1
        }, {
            'buttonId': `.raffgagal ${number}|${pesan}`,
            'buttonText': {
                'displayText': ' BATAL '
            },
            'type': 1
        }, ],
    })
}
handler.command = /^(orderr)$/i
export default handler