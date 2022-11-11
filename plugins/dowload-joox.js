import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {

if (command == 'jooxs') {
if (!text) throw `Contoh:
${usedPrefix + command} gustixa`
let f = await fetch(`https://anabotofc.herokuapp.com/api/jooxsearch?apikey=AnaBot&query=${text}`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
Album id : ${v.album_id}
ID : *${v.id}*
Judul : *${v.name}*
Album : ${v.album_name}
Artist : ${v.artist_list.name}
Img : ${v.images.url}
Vip : *${v.vip_flag}*
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  m.reply(teks)
            }

if (command == 'jooxp') {
if (!text) throw `Contoh:
${usedPrefix + command} gustixa`
let f = await fetch(`https://api.akuari.my.id/downloader/jooxplay?judul=${text}`)
let x = await f.json()
let v = x.respon
let teks = `*Result:*
*singer:* ${v.msinger}
*song:* ${v.msong}
*album:* ${v.malbum}
*date:* ${v.public_time}

`
  await conn.sendButton(m.chat, teks, wm, v.imgSrc, [
                ['Search!', `${usedPrefix}jooxs ${text}`],
                ['Mp3!', `${usedPrefix} gettt ${text}`]
            ], m)
            }
            
  if (command == 'gettt') {
              if (!text) throw `Contoh:
${usedPrefix + command} gustixa`
              let f = await fetch(`https://api.akuari.my.id/downloader/jooxplay?judul=${text}`)
              let x = await f.json()
              let v = x.respon
              let p = v.mp3Url
              let title = v.msong
              await conn.sendFile(m.chat, p, title + '.mp3', m)
            }
}

handler.command = handler.help = ['jooxs', 'jooxp', 'gettt']
handler.tags = ['tools']

export default handler
