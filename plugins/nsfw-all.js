
import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
let nyenye = `https://zenzapis.xyz/api/morensfw/${command}?apikey=80b5045dce`
    conn.sendButton(m.chat, '(≧ω≦)', '', await(await fetch(nyenye)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.help = ['ahegao', 'ass', 'bdsm', 'blowjob', 'cum', 'cuckold', 'ero', 'femdom', 'foot', 'gangbang', 'glasses', 'hentai', 'hentaigif', 'jahy', 'maid', 'manga', 'neko', 'orgy', 'panties', 'pussy','sfwneko', 'tentacles', 'thighs', 'yuri', 'zettairyouiki']
handler.tags = ['nsfw']
handler.command = /^(ahegao|ass|bdsm|blowjob|cum|cuckold|ero|femdom|foot|gangbang|glasses|hentai|hentaigif|jahy|maid|manga|neko|orgy|panties|pussy|sfwneko|tentacles|thighs|yuri|zettairyouiki)$/i
handler.exp = 0

handler.premium = true
export default handler

