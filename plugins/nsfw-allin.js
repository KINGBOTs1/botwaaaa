import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://revita.herokuapp.com/api/nsfw/${command}?apikey=ApiRevita`
	conn.sendButton(m.chat, '(≧ω≦)', '', await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = handler.help = ['ahegao', 'ass', 'bdsm', 'blowjob', 'cuckold', 'cum', 'ero', 'femdom', 'foot', 'gangbang', 'glasses', 'hentai',
'gifs', 'jahy', 'manga', 'mstb', 'neko', 'orgy', 'panties', 'pussy', 'neko2', 'tentacles', 'things', 'yuri', 'zettai']
handler.tags = ['anime']
handler.premium = true


export default handler