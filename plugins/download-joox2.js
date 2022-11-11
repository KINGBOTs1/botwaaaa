import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {

if (command == 'jooxs2') {
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

if (command == 'jooxp2') {
if (!text) throw `Contoh:
${usedPrefix + command} gustixa`
let f = await fetch(`https://api.lolhuman.xyz/api/jooxplay?apikey=3bdc50817116215d3251905e&query=${text}`)
let x = await f.json()
let v = x.result.info
let teks = `*Result:*
*singer:* ${v.singer}
*song:* ${v.song}
*album:* ${v.album}
*date:* ${v.date}
*duration:* ${v.duration}
*lirik:* ${x.result.lirik}
`
  await conn.sendButton(m.chat, teks, wm, x.result.image, [
                ['Search!', `${usedPrefix}jooxs ${text}`],
                ['Mp3!', `${usedPrefix}gett ${text}`]
            ], m)
            }
if (command == 'gett') {
    if (!text) throw `Contoh:
${usedPrefix + command} gustixa`
    let f = await fetch(`https://api.lolhuman.xyz/api/jooxplay?apikey=3bdc50817116215d3251905e&query=${text}`)
    let x = await f.json()
    let v = x.result
    let p = v.audio[0].link
    let title = v.info.song
    await conn.sendFile(m.chat, p, title + '.mp3',  m)
}
            
}



handler.command = handler.help = ['jooxs2', 'jooxp2', 'gett']
handler.tags = ['tools']

export default handler
