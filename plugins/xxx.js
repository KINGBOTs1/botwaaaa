import fs from 'fs'
import fetch from 'node-fetch'
import db from '../lib/database.js'

let handler = async (m, { conn }) => {
      let _fun = JSON.parse(fs.readFileSync('./json/xxx.json'))
      let json = _fun[Math.floor(Math.random() * _fun.length)]
      let caption = `❏  *B O K E P*\n\n`
         caption += `${json.title}\n`
         caption += `🛡 Premium viral : 50k\n\n`
         caption += author 
      conn.sendFile(m.chat, await (await fetch(json.path)).buffer(), 'video.mp4', caption, m)
}
handler.help = ['bokep']
handler.tags = ['premium']
handler.command = ['bokep22']

export default handler