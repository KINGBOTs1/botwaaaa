import xa from 'xfarr-api'

let handler = async (m, { conn, text }) => {
   if (!text) throw `Maasukan url tiktok...`
try {
   let res = await xa.downloader.tiktok(text)
   let { media } = res 
   await conn.sendFile(m.chat, media[2].url, 'eror.mp3', '', m, null, { mimetype: 'audio/mp4' })
} catch (e) {
m.reply('invalid url')
throw e
}
}
handler.help = ['ttaudio']
handler.tags = ['downloader']
handler.command = /^((tt|tiktok)(audio|mp3))$/i

export default handler