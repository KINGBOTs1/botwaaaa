import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `contoh:\n${usedPrefix + command} BOTCAHX`
    
    let json = await fetch(`https://botcahx.ddns.net/api/tools/styletext?text=${text}`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*`
        for (let x of jsons.result) {
        caption += `
*Hasil* : ${x.result}
`}
        return m.reply(caption)
        
}
handler.help = ['styletext <pencarian>']
handler.tags = ['tools']

handler.command = /^(styletext|font)/i

export default handler
