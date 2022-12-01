import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
      let _fun = JSON.parse(fs.readFileSync('./json/viral.json'))
      let json = _fun[Math.floor(Math.random() * _fun.length)]
      let caption = `❏  *RANDOM - VIRAL*\n\n`
         caption += `${json.title}\n\n`
         caption += author 
      conn.sendFile(m.chat, await (await fetch(json.path)).buffer(), 'video.mp4', caption, m)
}
handler.help = ['viral']
handler.tags = ['nsfw']
handler.command = ['viral']

 export default handler