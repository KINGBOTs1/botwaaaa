let handler = async (m, { conn, command }) => {
let nyenye = `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=3bb99b19ba15e6a65ee4f6dd`
    conn.sendFile(m.chat, nyenye, 'Nih', `.${command}`, m)
}
handler.help = ['hollolewd', 'sideoppai', 'animefeets', 'animebooty', 'animethighss', 'animearmpits', 'lewdanimegirls', 'biganimetiddies']
handler.tags = ['nsfw']
handler.command = /^(hollolewd|sideoppai|animefeets|animebooty|animethighss|animearmpits|lewdanimegirls|biganimetiddies)$/i
handler.exp = 0
handler.premium = true

export default handler
