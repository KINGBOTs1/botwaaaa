// Nyoba downloader hasil recode sendiri ngbab
// Visit web nya (link): https://botcahx2.ddns.net
// Penggunaan filter audio dan video
// Example:
// filter=videoonly&quality=highestvideo&contenttype=video/mp4
// filter=audioonly&quality=highestaudio&contenttype=audio/mpeg
// Akhir hasil :
// https://botcahx2.ddns.net/?url=${url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg



import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'

let handler = async (m, { conn, text }) => {
  if (!text) throw 'Input Query'
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak Ditemukan'
  let { title, description, thumbnail, videoId, durationH, durationS, viewH, publishedTime } = vid
  let url = 'https://www.youtube.com/watch?v=' + videoId
  let ytLink = `https://botcahx2.ddns.net/?url=${url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
  let capt = `*Title:* ${title}\n*Published:* ${publishedTime}\n*Duration:* ${durationH}\n*Views:* ${viewH}\n*Description:* ${description}\n*Url:* ${url}`
  let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: capt, footer: '_Audio on progress..._' }, { quoted: m })
  //if (durationS > 4000) return conn.sendMessage(m.chat, { text: `*Download:* ${await shortUrl(ytLink)}\n\n_Duration too long..._` }, { quoted: msg })
  conn.sendMessage(m.chat, { audio: { url: ytLink }, mimetype: 'audio/mpeg' }, { quoted: msg })
}
handler.help = ['plays']
handler.tags = ['downloader']
handler.command = /^(plays)$/i
handler.exp = 0

export default handler

async function shortUrl(url) {
  url = encodeURIComponent(url)
  let res = await fetch(`https://is.gd/create.php?format=simple&url=${url}`)
  if (!res.ok) throw false
  return await res.text()
}
