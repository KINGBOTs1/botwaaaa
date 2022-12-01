import db from '../lib/database.js'
let handler = async(m, { conn, text, usedPrefix }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dikirim', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
    let user = db.data.users[m.sender]

    let own = global.nomorown
    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `${pesan} \n\n [ *DIBATALKAN* ]\n`

    conn.reply(korban + '@s.whatsapp.net', spam1, null, {
        buttons: [{
            'buttonId': `raff`,
            'buttonText': {
                'displayText': ' RAFFSTORE '
            },
            'type': 1
        }, ],
    })

    let logs = `[!] Berhasil mengirim pesan wa ke nomor ${korban}`
    conn.reply(m.chat, logs, m)
}

handler.command = /^(raffgagal)$/i
handler.rowner = false
handler.limit = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

export default handler 
