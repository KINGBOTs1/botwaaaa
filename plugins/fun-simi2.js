import fetch from 'node-fetch'
let handler = async (m, {text, args}) => {
  if (!args[0]) throw `Use example .simi halo`
  let api = await fetch(`https://api.akuari.my.id/simi/simi?query=${text}`)
  let res = await api.json()
  m.reply(res.respon)
}
handler.command = ['simii2']
handler.tags = ['fun']
handler.help = ['simi']

export default handler