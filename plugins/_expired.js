import db from '../lib/database.js'

let handler = m => m
handler.before = async function (m) {
    if (m.isGroup && db.data.chats[m.chat].expired != 0) {
        if (new Date() * 1 >= db.data.chats[m.chat].expired) {
            this.reply(m.chat, `? waktunya *${this.user.name}* untuk meninggalkan grup\n? Jangan lupa sewa lagi ya!`, null).then(() => {
                this.sendContact(m.chat, owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m).then(() => {
                    this.groupLeave(m.chat).then(() => {
                        db.data.chats[m.chat].expired = 0
                    })
                })
            })
        }
    }
}

export default handler