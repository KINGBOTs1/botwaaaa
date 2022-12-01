import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (text.length < 1 ) throw `Laporan terlalu pendek, minimal 10 karakter!`
    if (text.length > 1000) throw `Laporan terlalu panjang, maksimal 1000 karakter!`
    let number = `${m.sender.split`@`[0]}`
    let pesan = `${text} \n\n [ *SEDANG DIPROSES* ]`
    let buttonMessage= {
    'contextInfo': {
        'forwardingScore': 555,
        'isForwarded': true,
        'externalAdReply': {
            'title': global.titlebot,
            'body': global.titlebot,
            'thumbnail': await (await fetch('https://telegra.ph/file/7a7c3c601a73e65060cd9.jpg')).buffer(),
            'sourceUrl': 'https://youtube.com/channel/UC1oSMQCd3XKVxYwSh4RE2Nw'
        }
    },
    'caption': pesan,
    'footer': botdate,
    'buttons': [
{'buttonId':`.email ${number}|${pesan}`,'buttonText':{'displayText':'💬 PROSES'},'type':1},
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.command = /^(orderr)$/i
export default handler