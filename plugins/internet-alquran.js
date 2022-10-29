import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Contoh:\n${usedPrefix + command} 1`
    
    let json = await fetch(`https://botcahx.ddns.net/api/islamic/surah?no=${text}`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 Al-Qur'an 」━┉⎔*`
        for (let tio of jsons.result) {
        caption += `
⎔ *${tio.arab}*
⎔ *${tio.latin}*
\n⎔ _${tio.rumi}_
`}
        return m.reply(caption)
        
}
handler.help = ['surah <pencarian>']
handler.tags = ['internet']

handler.command = /^(surah|alquran)/i

export default handler
