import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, usedPrefix, text }) => {
  if (!text) throw 'Cari apa?'
  const { video, channel } = await youtubeSearch(text)
  const listSections = []
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': {
        listSections.push([`${v.title}`, [
          ['Video π₯', `${usedPrefix}ytv ${v.url}`, `download ${v.title} (${v.url})`],
          ['Audio π§', `${usedPrefix}yta ${v.url}`, `download ${v.title} (${v.url})`]
        ]])
        return `
π *${v.title}* (${v.url})
β Duration: ${v.durationH}
β²οΈ Uploaded ${v.publishedTime}
ποΈ ${v.view} views
      `.trim()
      }
      case 'channel': return `
π *${v.channelName}* (${v.url})
π§βπ€βπ§ _${v.subscriberH} (${v.subscriber}) Subscriber_
π₯ ${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n\n========================\n\n')
  const msg = await m.reply(teks)
  conn.sendList(m.chat, 'πΊYoutube Searchπ', '\nDownload List', global.wm, 'Choose', listSections, msg)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i

export default handler
