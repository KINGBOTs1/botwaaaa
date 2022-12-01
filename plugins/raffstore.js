let handler = async (m, {
    conn,
    command
}) => {
const templateButtons = [
  {index: 1, quickReplyButton: {displayText: 'ORDER', id: '.order'}},
]
    if (command == 'mdiamond') {
        let text = `*LIST HARGA DM*`
        let tio = {
            caption: text.trim(),
            image: {
                url: "https://telegra.ph/file/cbbaa135a4377f579f8ee.jpg"
            },
            templateButtons: templateButtons,
        }
        await conn.sendMessage(m.chat, tio, m)
    }

    if (command == 'mskin') {
        let text = `*LIST HARGA SKIN*`
        let tio = {
            caption: text.trim(),
            image: {
                url: "https://telegra.ph/file/7480070877a505c40590c.jpg"
            },
            templateButtons: templateButtons,
        }
        await conn.sendMessage(m.chat, tio, m)
    }

    if (command == 'mqriss') {
        let res = `https://telegra.ph/file/2e8b2e3ad127223abdf83.jpg`
        let text = `*[QRIS]*`
        conn.sendFile(m.chat, res, 'qris.jpg', text, m)
    }

	


}

handler.command = handler.help = ['mskin', 'mdiamond', 'mqriss']
handler.tags = ['tools']

export default handler
