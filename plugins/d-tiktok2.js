import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
m.reply('Tunggu sebentar...')
let res = await fetch(`https://botcahx.ddns.net/api/dowloader/tikok?url=${args[0]}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let { video, description, username } = json.result
await conn.sendFile(m.chat, video, 'video.mp4', `
🧏 Username: ${username}
📋 Deskripsi: ${description}
🔗 Url: ${video}


`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}

handler.help = ['tiktok2 <url>']
handler.tags = ['downloader']

handler.command = /^(tiktok2)$/i
handler.limit = true

export default handler
