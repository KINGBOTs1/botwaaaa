import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Url Nya Mana..?\nContoh : .ttaudio https://vt.tiktok.com/ZSRDgWawB/'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.lolhuman.xyz/api/tiktokmusic?apikey=3bdc50817116215d3251905e&url=${args[0]}`
  conn.sendFile(m.chat, res, 'xynz.opus', `┏┉━━━━━━━━━━━❏
┆ *TIKTOK MP3*
├┈┈┈┈┈┈┈┈┈┈┈
┆• *Judul:* 
│• *Type:* MP3
┆• *📥 Ukuran File:* 
└❏`, m, false)
}
handler.help = ['ttaudio <teks>']
handler.tags = ['downloader']
handler.command = /^(ttaudio|tiktokmp3|ttmp3)$/i
handler.limit = true

export default handler