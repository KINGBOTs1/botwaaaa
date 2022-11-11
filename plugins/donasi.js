let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa [082144323683]
│ • Dana [082144323683]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [082144323683]
│ • Pulsa [082144323683]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
