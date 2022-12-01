let handler = async (m, {
    conn,
    command
}) => {
let sections = [{
    title: "LIST HARGA",
    rows: [{
        title: "SKIN",
        rowId: `.mskin`,
        description: `👤 Skin`
    }, {
        title: "DIAMOND",
        rowId: `.mdiamond`,
        description: `💎Diamond`
    }, ]
}, {
    title: "PAYMENT",
    rows: [{
            title: "QRIS",
            rowId: `.mqriss`,
            description: `🧾QRIS`
        },
        {
            title: "OWNER",
            rowId: `mowner`,
            description: `👑Owner Menu`
        }
    ]
}, ]
    if (command == 'mdiamond') {

        let res = `https://telegra.ph/file/cbbaa135a4377f579f8ee.jpg`
        let text = `*LIST HARGA DM*`
        return conn.sendButton(m.chat, hiasan, text, `${res}`, [
            ['ORDER', '.order']
        ], m)
    }

    if (command == 'mskin') {

        let res = `https://telegra.ph/file/7480070877a505c40590c.jpg`
        let text = `*LIST HARGA SKIN*`
        return conn.sendButton(m.chat, hiasan, text, `${res}`, [
            ['ORDER', '.order']
        ], m)
    }

    if (command == 'mqriss') {

        let res = `https://telegra.ph/file/2e8b2e3ad127223abdf83.jpg`
        let text = `*[QRIS]*`
        return conn.sendButton(m.chat, hiasan, text, `${res}`, sections
        )
    }
}

handler.command = handler.help = ['mskin', 'mdiamond', 'mqriss']
handler.tags = ['tools']

export default handler
