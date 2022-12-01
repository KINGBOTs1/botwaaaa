import { createHash } from 'crypto'
import db from '../lib/database.js'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { conn,
	command,
	args,
	usedPrefix,
text }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
if (!text) throw `
.order <id>|<server>|<username>|<order apa>\n\n
*CONTOH* .order 99128654|2145|K I N G|344 DM`
let [id, server, usrnm,ordr] = text.split `|`
  let cap = `
┏━━❉ *ORDER* ❉━━┓
┃  *ID:* ${encodeURIComponent(id ? id : '')}
┃  *SERVER:* ${encodeURIComponent(server ? server : '')}
┃  *USERNAME:* ${encodeURIComponent(usrnm ? usrnm : '')}
┃  *SERVER:* ${encodeURIComponent(server ? server : '')}
┃  *ORDER:* ${encodeURIComponent(ordr ? ordr : '')}
┗━━━━━━━━━━━━━━

`
  let buttonMessage= {
'document': {
    'url': 'https://youtube.com/channel/UC1oSMQCd3XKVxYwSh4RE2Nw'
},
    'contextInfo': {
        'forwardingScore': 555,
        'isForwarded': true,
        'externalAdReply': {
            'mediaUrl': 'https://youtube.com/channel/UC1oSMQCd3XKVxYwSh4RE2Nw',
            'mediaType': 2,
            'previewType': 'pdf',
            'title': global.titlebot,
            'body': global.titlebot,
            'thumbnail': await (await fetch('https://telegra.ph/file/7a7c3c601a73e65060cd9.jpg')).buffer(),
            'sourceUrl': 'https://youtube.com/channel/UC1oSMQCd3XKVxYwSh4RE2Nw'
        }
    },
    'caption': cap,
    'footer': botdate,
    'buttons': [
{'buttonId':`.orderr ${cap}`,'buttonText':{'displayText':'💬 ORDER NOW'},'type':1},
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['order', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(order?)$/i

export default handler
