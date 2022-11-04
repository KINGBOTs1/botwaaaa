let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let textt = `

    *SETTING GROUP*
`
const sections = [{
        title: "SETTING GROUP",
        rows: [{
                title: "OPEN",
                rowId: '.g open '
            },
            {
                title: "CLOSE",
                rowId: '.g close '
            }
        ]
    },
]

 const listMessage = {
     text: textt,
     title: "",
     buttonText: "HERE",
     sections
 }

conn.sendMessage(m.chat, listMessage, { quoted: m }) 
}
handler.help = ['group']
handler.tags = ['group']
handler.command = /^groupsetting$/i
handler.owner = false
handler.admin = true
handler.botAdmin = true
handler.group = true 

export default handler