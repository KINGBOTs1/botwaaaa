let handler = async (m, { conn, command }) => {
let nyenye = `https://api.lolhuman.xyz/api/random2/${command}?apikey=3bb99b19ba15e6a65ee4f6dd`
    conn.sendFile(m.chat, nyenye, 'Nih', `.${command}`, m)
}
handler.help = ['lewd', 'eron', 'solo', 'anal', 'keta', 'tits', 'kuni', 'solog', 'erok', 'feetg', 'lewdk', 'erofeet', 'holoero', 'classic', 'erokemo', 'futanari', 'eroyuri', 'yaoi']
handler.tags = ['nsfw']
handler.command = /^(lewd|eron|solo|anal|keta|tits|kuni|solog|erok|feetg|lewdk|erofeet|holoero|classic|erokemo|futanari|eroyuri|yaoi)$/i
handler.exp = 0


export default handler
 
