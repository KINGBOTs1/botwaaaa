/*
By : Fangz
*/
import db from '../lib/database.js'
let handler = m => m

handler.before = function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat =db.data.chats[m.chat]
  let sender =db.data.chats[m.sender]
  

  let isSticker = m.mtype
  if (chat.antiSticker && isSticker) {
    if(isSticker === "stickerMessage"){
      if (global.opts) {
        if (isAdmin || !isBotAdmin){		  
        }else{
          m.reply('*Terdeteksi Telah mengirim Sticker\nKamu akan di keluarkan!*') // ganti text terserah kamu 
          this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
        }return true
      }
    }
  }
  return true
}

export default handler 
