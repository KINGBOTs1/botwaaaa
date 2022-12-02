import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import fetch from 'node-fetch'

/*⫘⫘⫘⫘ WAKTU ⫘⫘⫘⫘⫘*/
global.wibh = moment.tz('Asia/Jakarta').format('HH')
global.wibm = moment.tz('Asia/Jakarta').format('mm')
global.wibs = moment.tz('Asia/Jakarta').format('ss')
global.wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
global.wktuwib = `${global.wibh} H ${global.wibm} M ${global.wibs} S`

let d = new Date(new Date + 3600000)
let locale = 'id'
// d.getTimeZoneOffset()
// Offset -420 is 18.00
// Offset    0 is  0.00
// Offset  420 is  7.00
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, {
  weekday: 'long'
})
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
global.hiasan = '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦'
global.thumbEror = 'https://telegra.ph/file/430b8f1ae35c655bfee93.jpg'
/*⫘⫘⫘⫘ GLOBAL NOMOR ⫘⫘⫘⫘⫘*/
global.nomorbot = '6285172081982' //Nomor Bot mu
global.nomorown2 = '82144323683' //Nomormu
global.nomorown = '6282144323683' //Nomormu
global.namebot = 'King' //Nama bot mu
global.nameown = 'DENI' //Nama mu

global.owner = [
 //Owner3
  ['6282144323683', 'DENI', true] //Ini buat kamu!
  // [number, dia creator/owner?, dia developer?]
] // Put your number here // paste nomor di sini
global.mods = ['6282144323683'] // bantuan?
global.prems = ['6282144323683'] // user premium limit tanpa batas 
global.APIs = { // API Prefix
  // name: 'https://website'
  nrttm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  violetics: 'https://violetics.pw',
  males: 'https://malesin.xyz',
  rey: 'https://server-api-rey.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  bear: 'https://saipulanuar.ga',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  bsbt: 'https://bsbt-api-rest.herokuapp.com', 
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/'
}
global.wm = '' //Wm
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
    'https://violetics.pw': '0a97-8713-11dc',
    'https://api.xteam.xyz': 'NezukoTachibana281207',
    'https://anabotofc.herokuapp.com/': 'AnaBot',
    'https://api.lolhuman.xyz': '3bdc50817116215d3251905e',
    'https://zahirr-web.herokuapp.com': 'zahirgans',
    'https://saipulanuar.ga/': 'zahirgans',
    'https://api.zeks.xyz': 'apivinz',
    'https://pencarikode.xyz': 'pais',
    'https://api.neoxr.my.id': '5VC9rvNx',
    'https://rest-beni.herokuapp.com': 'benniismaelapikey',
    'https://melcanz.com': 'manHkmst',
    'https://neoxr-api.herokuapp.com': 'yntkts',
    'https://server-api-rey.herokuapp.com': 'apirey',
    'https://botstyle-api.herokuapp.com': 'Fa2GhFnr',
    'https://bsbt-api-rest.herokuapp.com': 'benniismael',
    'https://hardianto.xyz': 'hardianto',
    'https://zenzapis.xyz': 'f9fccfcff1',
    'https://hardianto-chan.herokuapp.com': 'hardianto',
    'https://leyscoders-api.herokuapp.com': 'dappakntlll',
}
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
]
global.botdate = `⻝ Tanggal: ${week} ${date}\n⻝ Waktu: ${wktuwib}`
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
//global.fla Jangan di ganti
/*⫘⫘⫘⫘ LOADING ⫘⫘⫘⫘⫘*/
global.wait = '```[ ! ] wait...```'
global.eror = '⸨Acsess Danied⸩'

/*⫘⫘⫘⫘ DOCUMENT ⫘⫘⫘⫘⫘*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

/*⫘⫘⫘⫘ FAKE SIZE ⫘⫘⫘⫘⫘*/
global.fsizedoc = '99999999999999' // 10TB
global.fpagedoc = '999' //Gausah di ganti.

/*⫘⫘⫘⫘ BIO OWNER ⫘⫘⫘⫘⫘*/
global.nameowner = 'King'
global.umurowner = '14'
global.asalowner = 'suaran, Kalimantan timur'
global.nomorowner = 'wa.me/6282144323683'
global.pacarowner = 'INISIAL Q'
/*⫘⫘⫘⫘ HIASAN ⫘⫘⫘⫘⫘*/
// DEFAULT MENU
global.dmenut = '┏━━❉' //top
global.dmenub = '┣⊱ ۪' //body
global.dmenub2 = '┃' //body for info cmd on Default menu
global.dmenuf = '𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊\n\n◐ Fokus ID\n◐FangzXD\n◐The.sad.boy01\n◐Kanna\n◐Nurutomo\n◐Bochilgaming\n◐Amirul\n◐Ilham\n◐Rasel\n◐Pemakai bot ini\n◐I love you\n\n© https://bit.ly/3QJOy9F' //footer

// COMMAND MENU
global.cmenut = '┏━━❉' //top
global.cmenuh = '❉━━┓' //header
global.cmenub = '┣⊱ ' //body
global.cmenuf = '┗━━━━━━━━━━━━━━' //footer
global.cmenua = '┣━━━━━━━━━━━━━━' //after
global.pmenus = '┣⊱ ' //pembatas menu selector

global.htki = '┏━━❉' // Hiasan Titile (KIRI)
global.htka = '❉━━┓' // Hiasan Title  (KANAN)
global.lopr = '🅟' //LOGO PREMIUM ON MENU.JS
global.lolm = '🅛' //LOGO FREE ON MENU.JS
global.htjava = 'இ'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']
global.stiker_wait = '▰▰▰▰▰▰▱▱ 98% 𝚠𝚊𝚒𝚝!!'
global.wait = '▰▰▰▰▰▰▱▱ 98% 𝚠𝚊𝚒𝚝!!'
global.eror = 'Mohon Maaf Server Kami Sedang Error!'

/*⫘⫘⫘⫘ FAKE NYA ⫘⫘⫘⫘⫘*/
global.fsizedoc = '1'.repeat(10)
global.fpagedoc = '1'.repeat(10)
global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'
// Wm untuk stiker dan autobio
global.titlebot = `DENIBOT | ʙʏ ${global.nameown}`
global.danied = '✘ 𝗘𝗥𝗢𝗥 𝟰𝟬𝟰'
global.ultahowner = 'Agustus 19 2002'
global.tio = 'DENI'
global.packname = '© KING'
global.author = 'DENI'
global.sections = [{
  title: "ALL MENU",
  rows: [{
    title: "All Menu",
    rowId: `.menuall`,
    description: `📕All Menu`
  }, ]
}, {
  title: "MENU BOT",
  rows: [{
      title: "GROUP",
      rowId: `mgroup`,
      description: `👥Group Menu`
    },
    {
      title: "Webzone",
      rowId: `mwebzone`,
      description: `📹Webzone Menu`
    },
    {
      title: "DOWNLOADER",
      rowId: `mdownloader`,
      description: `📥Downloader Menu`
    },
    {
      title: "TOOLS",
      rowId: `mtools`,
      description: `🛠️Tools Menu`
    },
    {
      title: "INFO",
      rowId: `minfo`,
      description: `❔Info Menu`
    },
    {
      title: "Text Pro",
      rowId: `mtextpro`,
      description: `❇Text Pro Menu`
    },
    {
      title: "STICKER",
      rowId: `msticker`,
      description: `🏵️Sticker Menu`
    },
    {
      title: "Ephoto",
      rowId: `mephoto`,
      description: `🗳Ephoto Menu`
    },
    {
      title: "FUN",
      rowId: `mfun`,
      description: `🔫Fun Menu`
    },
    {
      title: "Kerang Ajaib",
      rowId: `mkaj`,
      description: `🐚Kerang Ajaib Menu`
    },
    {
      title: "Primbon",
      rowId: `mprimbon`,
      description: `😂Primbon Menu`
    },
    {
      title: "Convert",
      rowId: `mconvert`,
      description: `🛠Convert Menu`
    },
    {
      title: "GAME",
      rowId: `mgame`,
      description: `🎮Game Menu`
    },
    {
      title: "RPG",
      rowId: `mrpg`,
      description: `🤴🏻RPG Menu`
    },
    {
      title: "DATABASE",
      rowId: `mdatabase`,
      description: `📁Database Menu`
    },
    {
      title: "ANONYMOUS",
      rowId: `manonymous`,
      description: `🎭Anonymous Menu`
    },
    {
      title: "Islamic",
      rowId: `mislamic`,
      description: `🕌Islamic Menu`
    },
    {
      title: "VOICE",
      rowId: `mvoice`,
      description: `🎶Voice Menu`
    },
    {
      title: "OWNER",
      rowId: `mowner`,
      description: `👑Owner Menu`
    }
  ]
}, ]
global.hwaifu = ['https://i.pinimg.com/originals/ed/34/f8/ed34f88af161e6278993e1598c29a621.jpg',
  'https://i.pinimg.com/originals/85/4d/bb/854dbbd30304cd69f305352f0183fad0.jpg',
  'https://i.pinimg.com/originals/32/2c/a4/322ca456fa2cdec4b717895a65adfa8d.jpg',
  'https://i.pinimg.com/originals/f2/dd/cc/f2ddccd5a1b89d2302cf75c6520c58dd.png',
  'https://i.pinimg.com/originals/aa/6b/df/aa6bdf98cbc9e1fc741c36682fa3e838.jpg',
  'https://i.pinimg.com/originals/88/46/88/884688def830c43648f88154836a8b05.jpg',
  'https://i.pinimg.com/originals/57/d9/20/57d920d58533915850b431bd0b8e1f1d.jpg',
  'https://i.pinimg.com/originals/46/ad/05/46ad0505d33a2c2359f84ed9b867a58c.jpg',
  'https://i.pinimg.com/originals/23/b7/fb/23b7fb922770e139a2a57b1a443a2180.jpg',
  'https://i.pinimg.com/originals/46/79/25/467925d52634fd098ab6890a23c33f30.jpg',
  'https://i.pinimg.com/originals/a4/a1/74/a4a1740e565f4205eb3f700e1936e064.jpg',
  'https://i.pinimg.com/originals/f9/8d/2c/f98d2c3f64e50ba6c8efd9fdc7cf0093.png',
  'https://i.pinimg.com/originals/29/a4/b4/29a4b4573f993d7d6abb45843f529892.jpg',
  'https://i.pinimg.com/originals/40/de/84/40de84ce2ee376d8fae8ff5863d6edb0.jpg',
  'https://i.pinimg.com/originals/b6/f5/b7/b6f5b7d59fd4f332b3820db38612a5a0.jpg',
  'https://i.pinimg.com/originals/94/38/6d/94386d3c23f509dbc30341fed0363a07.jpg',
  'https://i.pinimg.com/originals/b5/94/ef/b594ef0774d29f5a05cd182994aa354e.jpg',
  'https://i.pinimg.com/originals/0f/ed/3f/0fed3f4c456158c506d88f5867ca93d2.jpg',
  'https://i.pinimg.com/originals/1b/7a/a8/1b7aa80191b83b888e9ea6042f090763.jpg',
  'https://i.pinimg.com/originals/72/7a/08/727a08cdf67b62c2ba49e7308c09a1cd.jpg',
  'https://i.pinimg.com/originals/86/93/75/8693757390b9d5b83fb8e40ff9ea876f.jpg',
  'https://i.pinimg.com/originals/5f/79/71/5f79713647b3e99a787ee7483715c1eb.jpg',
  'https://i.pinimg.com/originals/b8/b3/f3/b8b3f397fead38a988174df75d481202.png',
  'https://i.pinimg.com/originals/7a/e0/55/7ae055891f8200cd62ec76a40d47118d.jpg',
  'https://i.pinimg.com/originals/bc/9b/81/bc9b81c63b4844fd1a434d462bdfbd80.png',
  'https://i.pinimg.com/originals/22/8b/ca/228bca60a07d72cac953a9c3be542bab.jpg',
  'https://i.pinimg.com/originals/41/10/c6/4110c64fc91a1c85de02166f67aff7ad.jpg',
  'https://i.pinimg.com/originals/45/11/41/451141522a9086f56efc0da3fdac1957.jpg',
  'https://i.pinimg.com/originals/c1/4e/c7/c14ec7dffbc682f78c52ad8a295b8831.jpg',
  'https://i.pinimg.com/originals/25/5d/d9/255dd9dde5f44673092a4f15e917759f.jpg',
  'https://i.pinimg.com/originals/1f/95/15/1f95156c3d8e2b339a22b3bad2f69a8a.png',
  'https://i.pinimg.com/originals/bb/1a/12/bb1a1249dbc73736ab534fdd52bdc74c.jpg',
  'https://i.pinimg.com/originals/d5/58/a7/d558a745f2452d851d480025ab341537.jpg',
  'https://i.pinimg.com/originals/e7/00/0e/e7000e7e72c1b37ea7a4c780182d05d8.jpg',
  'https://i.pinimg.com/originals/9e/53/a9/9e53a92ee711d979b9bdbb6212115fe0.jpg',
  'https://i.pinimg.com/originals/c6/16/d9/c616d9a871ed3cd9fb6a46efb7f92d95.jpg',
  'https://i.pinimg.com/originals/ac/f0/29/acf029047efffe57999fa876554cbf1d.jpg',
  'https://i.pinimg.com/originals/ae/86/3b/ae863b64ca579f05008dbf027b04988f.jpg',
  'https://i.pinimg.com/originals/d5/65/43/d56543a959da518e08012b4db93747bb.jpg',
  'https://i.pinimg.com/originals/ed/3c/e2/ed3ce276ca71e5bfec1cf2fbfc5561e1.jpg',
  'https://i.pinimg.com/originals/66/30/37/663037f00539f3bc1dbd3efeae0d700b.jpg',
  'https://i.pinimg.com/originals/63/6b/7b/636b7bd0e1df03f0bf72c494cedd6f07.png',
  'https://i.pinimg.com/originals/db/a4/13/dba413518c0a470a5e81cafa431281da.jpg',
  'https://i.pinimg.com/originals/3b/d9/aa/3bd9aa880d23dc3262e119ca09345e99.jpg',
  'https://i.pinimg.com/originals/ef/90/4e/ef904eda01a996e5a9d557a55db6da0f.png',
  'https://i.pinimg.com/originals/fb/f7/a9/fbf7a92af75577e33a564ce490154c8f.jpg',
  'https://i.pinimg.com/originals/16/92/89/1692897136ac3688ab9ccdbb0e54fb21.jpg',
  'https://i.pinimg.com/originals/fc/51/4e/fc514e2f4c23eb96721611b483edc28c.jpg',
  'https://i.pinimg.com/originals/bb/a4/98/bba49848bc4369333f4128b62fc64258.jpg',
  'https://i.pinimg.com/originals/67/a7/54/67a754077a1ffc75c25b3c7bb04d2258.png',
  'https://i.pinimg.com/originals/57/d9/20/57d920d58533915850b431bd0b8e1f1d.jpg',
  'https://i.pinimg.com/originals/83/e5/71/83e5710c42b9e8b9e1a4b6381c4535fe.jpg',
  'https://i.pinimg.com/originals/88/46/88/884688def830c43648f88154836a8b05.jpg',
  'https://i.pinimg.com/originals/32/2c/a4/322ca456fa2cdec4b717895a65adfa8d.jpg',
  'https://i.pinimg.com/originals/42/88/f1/4288f17ee25b909430fb7e707d961d0b.jpg',
  'https://i.pinimg.com/originals/16/14/9c/16149c94a7c0f753230b1edbd03ab3e6.jpg',
  'https://i.pinimg.com/originals/7f/f5/46/7ff546b38e2969e578e697c44944b74f.jpg',
  'https://i.pinimg.com/originals/6d/bc/61/6dbc616311268a25b0ee0e1bd4de13b6.jpg',
  'https://i.pinimg.com/originals/60/34/18/603418ea5c35839914a1071e134add8b.jpg',
  'https://i.pinimg.com/originals/5f/79/71/5f79713647b3e99a787ee7483715c1eb.jpg',
  'https://i.pinimg.com/originals/ed/ea/37/edea37b6f876bfc8f59bbae4d43e26d7.jpg',
  'https://i.pinimg.com/originals/94/38/6d/94386d3c23f509dbc30341fed0363a07.jpg',
  'https://i.pinimg.com/originals/f6/20/b4/f620b4b1c2aaf096455952465db8a980.jpg',
  'https://i.pinimg.com/originals/97/50/73/9750731b4b004da61d44fe01dbe93d85.jpg',
  'https://i.pinimg.com/originals/a0/55/41/a055419e96bc61a5990c575af10ba99e.png',
  'https://i.pinimg.com/originals/aa/6b/df/aa6bdf98cbc9e1fc741c36682fa3e838.jpg',
  'https://i.pinimg.com/originals/c2/4f/75/c24f7518e17faba4bf8908a39be604a6.jpg',
  'https://i.pinimg.com/originals/95/bb/2e/95bb2e7c8b71754003d063f39feb232a.jpg',
  'https://i.pinimg.com/originals/c4/e4/1d/c4e41d096e7585a7e6245e852ece25c2.jpg',
  'https://i.pinimg.com/originals/87/cf/bc/87cfbc189e773ed9294bccfd50a4fbc7.jpg',
  'https://i.pinimg.com/originals/7a/3b/e6/7a3be6cf1595fe6764b5b18b46ca576d.jpg',
  'https://i.pinimg.com/originals/c5/42/f8/c542f83b992e51c6d2519f07489b1dec.jpg',
  'https://i.pinimg.com/originals/96/29/1e/96291e9abbf311b8fc6c8c3f9f8ae059.jpg',
  'https://i.pinimg.com/originals/e5/1a/8d/e51a8d35d2b717fa757fa2abf053a2c7.jpg',
  'https://i.pinimg.com/originals/47/18/af/4718afcd517c8e7e07cc9dba48b3b770.jpg',
  'https://i.pinimg.com/originals/39/2c/cb/392ccb1793c5a23783869994b1ec24b7.jpg',
  'https://i.pinimg.com/originals/0f/98/5f/0f985ffbfff2650d6e3ecf8ba0eb574e.jpg',
  'https://i.pinimg.com/originals/ab/f9/50/abf950c9aa1c4710437d9acc83078f87.jpg',
  'https://i.pinimg.com/originals/f2/dd/cc/f2ddccd5a1b89d2302cf75c6520c58dd.png',
  'https://i.pinimg.com/originals/f1/f7/fc/f1f7fca39eba7d64e50749da5406247c.jpg',
  'https://i.pinimg.com/originals/71/18/96/711896c067c28814ec9ec9c25d4a3ba9.jpg',
  'https://i.pinimg.com/originals/67/a7/54/67a754077a1ffc75c25b3c7bb04d2258.png',
  'https://i.pinimg.com/originals/8f/fe/d4/8ffed485ed8b6db07067e452f8399fff.jpg',
  'https://i.pinimg.com/originals/db/b6/46/dbb6463c9134591aa79369f325877e03.jpg',
  'https://i.pinimg.com/originals/9f/23/1a/9f231a6acc906f95ff3f917211b9abda.png',
  'https://i.pinimg.com/originals/b9/a9/66/b9a9669f0fbbe75e780adad301601b43.jpg',
  'https://i.pinimg.com/originals/86/ed/26/86ed265f2dbb22a48bbc612f59303508.png',
  'https://i.pinimg.com/originals/da/ae/25/daae25409adec418a9b6f6c5dcdecd47.jpg',
  'https://i.pinimg.com/originals/a4/6d/fa/a46dfad749d0577366e9ea2db6cc305e.jpg',
  'https://i.pinimg.com/originals/09/5b/4d/095b4d0ce48f40eca7ad23e43e85ab9a.jpg',
  'https://i.pinimg.com/originals/d9/e1/30/d9e1307a5fbbeb2a267562eab8abc063.jpg',
  'https://i.pinimg.com/originals/db/cf/dc/dbcfdc263095906eabf7e06099ebaef0.png',
  'https://i.pinimg.com/originals/89/14/0d/89140d3ef976904013f672fea0157b7e.png',
  'https://i.pinimg.com/originals/cf/4f/cf/cf4fcf2036f0b5b974f146f2c0ba81db.jpg',
  'https://i.pinimg.com/originals/93/62/9e/93629ee9ab27043076bce2b1f22f9193.jpg',
  'https://i.pinimg.com/originals/99/6b/c4/996bc4049d632bdbf7d9bc24dc8081f0.png',
  'https://i.pinimg.com/originals/f2/6d/35/f26d354b1421546ae993c83f5c7bcfb0.jpg',
  'https://i.pinimg.com/originals/25/5d/d9/255dd9dde5f44673092a4f15e917759f.jpg',
  'https://i.pinimg.com/originals/08/8f/1d/088f1dc58092b60652e05cc941ee0fbd.jpg',
  'https://i.pinimg.com/originals/14/17/dd/1417dd63009eea0b63252076f3b405e6.jpg',
  'https://i.pinimg.com/originals/35/04/d5/3504d53c5850b3bddaa6e0e0714ccacb.jpg',
  'https://i.pinimg.com/originals/88/46/88/884688def830c43648f88154836a8b05.jpg',
  'https://i.pinimg.com/originals/57/d9/20/57d920d58533915850b431bd0b8e1f1d.jpg',
  'https://i.pinimg.com/originals/44/39/17/443917c07ffd65caa7d7cd4065fb8571.jpg',
  'https://i.pinimg.com/originals/bc/9b/81/bc9b81c63b4844fd1a434d462bdfbd80.png',
  'https://i.pinimg.com/originals/4a/e2/74/4ae274c828a2c719bcf9f644106d26cf.jpg',
  'https://i.pinimg.com/originals/d0/cb/da/d0cbdaa334fa92f8b09d1c4d1ddc9cd2.jpg',
  'https://i.pinimg.com/originals/71/16/31/711631ac52f7809f530e40f230b371a4.jpg',
  'https://i.pinimg.com/originals/af/f1/1b/aff11bcfdf946a7bba1687c80515f902.jpg',
  'https://i.pinimg.com/originals/46/79/25/467925d52634fd098ab6890a23c33f30.jpg',
  'https://i.pinimg.com/originals/ef/90/4e/ef904eda01a996e5a9d557a55db6da0f.png',
  'https://i.pinimg.com/originals/a2/e7/73/a2e773fdb7ce0fc99eb123d8a81764ec.jpg',
  'https://i.pinimg.com/originals/79/92/ed/7992ed0c9b272654938ea186cc2e3f4a.jpg',
  'https://i.pinimg.com/originals/7a/08/c8/7a08c8c22066a142f22928662d9d70aa.jpg',
  'https://i.pinimg.com/originals/20/b0/96/20b0962b8c62584fbcd6e7675b4782a4.jpg',
  'https://i.pinimg.com/originals/51/0f/8c/510f8cb8f28b8666d560f89e2006d4b1.jpg',
  'https://i.pinimg.com/originals/c2/4f/75/c24f7518e17faba4bf8908a39be604a6.jpg',
  'https://i.pinimg.com/originals/4e/43/7b/4e437b1bbdee605d833155a97d35bef1.png',
  'https://i.pinimg.com/originals/d5/a2/c9/d5a2c9cdfac835518e45b13cfc39819d.jpg',
  'https://i.pinimg.com/originals/95/bb/2e/95bb2e7c8b71754003d063f39feb232a.jpg',
  'https://i.pinimg.com/originals/16/92/89/1692897136ac3688ab9ccdbb0e54fb21.jpg',
  'https://i.pinimg.com/originals/6f/9a/86/6f9a86eb31e7c5bc34cf0d1d130574e0.png',
  'https://i.pinimg.com/originals/f0/67/f0/f067f00a885fab47d76d4e5423d54c35.jpg',
  'https://i.pinimg.com/originals/4e/9a/7a/4e9a7a196cea58427163313b7db6363e.jpg',
  'https://i.pinimg.com/originals/53/4c/6a/534c6a2e65fdb4c52824f94acc5e2195.jpg',
  'https://i.pinimg.com/originals/8d/04/9a/8d049a1e6951491b24ea4c364f2459bc.jpg',
  'https://i.pinimg.com/originals/22/dc/94/22dc941e60b0ace15d796a94f07d8ba7.jpg',
  'https://i.pinimg.com/originals/80/bc/96/80bc968b4dcd939b60ffe2c8b0c54d75.png',
  'https://i.pinimg.com/originals/ed/34/f8/ed34f88af161e6278993e1598c29a621.jpg',
  'https://i.pinimg.com/originals/9b/36/24/9b36241f4a3b782c05eadb0805ef0dda.png',
  'https://i.pinimg.com/originals/22/8b/ca/228bca60a07d72cac953a9c3be542bab.jpg',
  'https://i.pinimg.com/originals/57/0e/9b/570e9b1288f1189a22b39c8e24ec957f.jpg',
  'https://i.pinimg.com/originals/68/af/17/68af1781a9120a59629d0f774555185f.jpg',
  'https://i.pinimg.com/originals/42/88/f1/4288f17ee25b909430fb7e707d961d0b.jpg',
  'https://i.pinimg.com/originals/c8/0e/ee/c80eeea7a37d732d5a1b0e60464f9e18.jpg',
  'https://i.pinimg.com/originals/1d/08/cb/1d08cbb9d42812984bed54e8291edaec.jpg',
  'https://i.pinimg.com/originals/4e/37/02/4e37020a3e69f16cd04b246c2937b979.jpg',
  'https://i.pinimg.com/originals/59/8e/bf/598ebf206f5ec366e2e32e8c6e8cffb4.jpg',
  'https://i.pinimg.com/originals/cb/ef/94/cbef94975cfed070027c2175a730155d.jpg',
  'https://i.pinimg.com/originals/e0/74/f8/e074f8dc647066a9f112533c789c0e42.png',
  'https://i.pinimg.com/originals/60/ac/9e/60ac9edf63fcb43e3f00555cb71ae6f2.jpg',
  'https://i.pinimg.com/originals/17/16/76/1716760d93dcbf7664380fd81f3133f5.jpg',
  'https://i.pinimg.com/originals/a3/70/e1/a370e1f592136a385ac6cb15918d25f1.jpg',
  'https://i.pinimg.com/originals/89/ee/ab/89eeabd90e54b2951459f81f51e2c791.jpg',
  'https://i.pinimg.com/originals/77/0d/23/770d235d3f6dcd021bda5efdf53cca36.png',
  'https://i.pinimg.com/originals/67/a7/54/67a754077a1ffc75c25b3c7bb04d2258.png',
  'https://i.pinimg.com/originals/c3/1e/58/c31e58fae7f58af4d643c5a2facd49d7.jpg',
  'https://i.pinimg.com/originals/0f/98/5f/0f985ffbfff2650d6e3ecf8ba0eb574e.jpg',
  'https://i.pinimg.com/originals/93/0a/5f/930a5fc6f8f6e64e87ac2cc30b8430ac.jpg',
  'https://i.pinimg.com/originals/1e/14/22/1e14229be49534cbf3d43b71b1738b80.jpg',
  'https://i.pinimg.com/originals/35/04/d5/3504d53c5850b3bddaa6e0e0714ccacb.jpg',
  'https://i.pinimg.com/originals/57/d9/20/57d920d58533915850b431bd0b8e1f1d.jpg',
  'https://i.pinimg.com/originals/c2/4f/75/c24f7518e17faba4bf8908a39be604a6.jpg',
  'https://i.pinimg.com/originals/7f/f5/46/7ff546b38e2969e578e697c44944b74f.jpg',
  'https://i.pinimg.com/originals/bc/9b/81/bc9b81c63b4844fd1a434d462bdfbd80.png',
  'https://i.pinimg.com/originals/d5/a2/c9/d5a2c9cdfac835518e45b13cfc39819d.jpg',
  'https://i.pinimg.com/originals/d7/02/54/d7025401aec66a4baf0fbcbc1054b499.jpg',
  'https://i.pinimg.com/originals/95/bb/2e/95bb2e7c8b71754003d063f39feb232a.jpg',
  'https://i.pinimg.com/originals/ee/ee/fd/eeeefda1774a2d5dced265c1a2d398d5.jpg',
  'https://i.pinimg.com/originals/c3/1e/58/c31e58fae7f58af4d643c5a2facd49d7.jpg',
  'https://i.pinimg.com/originals/1f/9c/1d/1f9c1d5f4d2de0b74e81f190ab4f1792.jpg',
  'https://i.pinimg.com/originals/7a/3b/e6/7a3be6cf1595fe6764b5b18b46ca576d.jpg',
  'https://i.pinimg.com/originals/51/08/53/5108536a4826d3354ac3fe9c3c867cb1.png',
  'https://i.pinimg.com/originals/77/cc/bc/77ccbcd52758458669ed5eadf4437111.jpg',
  'https://i.pinimg.com/originals/51/0f/8c/510f8cb8f28b8666d560f89e2006d4b1.jpg',
  'https://i.pinimg.com/originals/6f/9a/86/6f9a86eb31e7c5bc34cf0d1d130574e0.png',
  'https://i.pinimg.com/originals/79/92/ed/7992ed0c9b272654938ea186cc2e3f4a.jpg',
  'https://i.pinimg.com/originals/39/2c/cb/392ccb1793c5a23783869994b1ec24b7.jpg',
  'https://i.pinimg.com/originals/3b/2c/02/3b2c020665f835b0dfdd74b8cc9ca22d.jpg',
  'https://i.pinimg.com/originals/ee/cf/7c/eecf7cc7f65e5d503399cc88f0e6ef6c.jpg',
  'https://i.pinimg.com/originals/4e/9a/7a/4e9a7a196cea58427163313b7db6363e.jpg',
  'https://i.pinimg.com/originals/8b/f8/46/8bf8468935d529c6383771097381196a.jpg',
  'https://i.pinimg.com/originals/f3/5d/ce/f35dce5f6742bd4f30033fe7b51335cc.jpg',
  'https://i.pinimg.com/originals/94/a6/69/94a6692d5bd9ba0bbd80ba1e4122b2f9.jpg',
  'https://i.pinimg.com/originals/8f/55/04/8f55043dfd9d244f172077bdc0304c6a.png',
  'https://i.pinimg.com/originals/89/ee/ab/89eeabd90e54b2951459f81f51e2c791.jpg',
  'https://i.pinimg.com/originals/83/5a/2e/835a2e582d1f803f03ab3a3c3e58b694.jpg',
  'https://i.pinimg.com/originals/25/5d/d9/255dd9dde5f44673092a4f15e917759f.jpg',
  'https://i.pinimg.com/originals/e2/f1/0e/e2f10ead12c9a2d7c0bb29442604f43d.jpg',
  'https://i.pinimg.com/originals/f5/2a/09/f52a09910f1cad9b5b01d79a620870dc.jpg',
  'https://i.pinimg.com/originals/d9/e1/30/d9e1307a5fbbeb2a267562eab8abc063.jpg',
  'https://i.pinimg.com/originals/6a/4d/11/6a4d11cb5bab1466cf1ccb8c6c4f9eb6.jpg',
  'https://i.pinimg.com/originals/f3/b7/37/f3b7376c2a574b8619c197bce72d1f63.png',
  'https://i.pinimg.com/originals/93/0a/5f/930a5fc6f8f6e64e87ac2cc30b8430ac.jpg',
  'https://i.pinimg.com/originals/30/78/75/307875a9132c6e704eec94bc31fd4f71.jpg',
  'https://i.pinimg.com/originals/12/fa/7d/12fa7df7ba74ac00d846d8d490f7c8a4.jpg',
  'https://i.pinimg.com/originals/68/f6/f3/68f6f37335624f89cda17ab928f51138.jpg',
  'https://i.pinimg.com/originals/de/f6/e7/def6e7ce26ad6a1096e8b1ef395a1904.jpg',
  'https://i.pinimg.com/originals/cc/17/be/cc17be94cd520baa4722e0ca2329c2e9.jpg',
  'https://i.pinimg.com/originals/b3/c5/d1/b3c5d1076a9a48c075c8a92987b03bf3.jpg',
  'https://i.pinimg.com/originals/2c/e6/02/2ce6025d9d1736cf3e67db1fd2bdaf35.jpg',
  'https://i.pinimg.com/originals/31/07/53/310753699042b254fdfa0472a2675158.jpg',
  'https://i.pinimg.com/originals/6b/87/9c/6b879cc29b5df23941dab4f4aafabcbd.jpg',
  'https://i.pinimg.com/originals/52/90/0b/52900bab0f969d9d68207f6ad8510882.jpg',
  'https://i.pinimg.com/originals/25/7e/db/257edb1b91a127bcf91cc2ea6b29edaf.jpg',
  'https://i.pinimg.com/originals/63/6b/7b/636b7bd0e1df03f0bf72c494cedd6f07.png',
  'https://i.pinimg.com/originals/8d/ad/58/8dad58f3b258b3d7f2e913cb4561d99f.jpg',
  'https://i.pinimg.com/originals/8d/04/9a/8d049a1e6951491b24ea4c364f2459bc.jpg',
  'https://i.pinimg.com/originals/fd/21/41/fd21419275236bb153de3c8dcbbf3bf9.jpg',
  'https://i.pinimg.com/originals/80/4f/1a/804f1a05f9996c96a2d492b4854b7fd5.jpg'
]
global.hyuri = ['https://telegra.ph/file/5d908f4a17515a15c6202.jpg']
global.hLokun = ['https://telegra.ph/file/8902f4fc550727a62e99f.jpg', 'https://telegra.ph/file/6a6a40e924c16a8f0de03.jpg', 'https://telegra.ph/file/b035d3038a0b124f1d846.jpg', 'https://telegra.ph/file/9d475f7852bf6f6193c80.jpg']
global.hloli = ['https://telegra.ph/file/872c360a7104d86752650.jpg', 'https://telegra.ph/file/f6bbb53620374257bfa51.jpg', 'https://telegra.ph/file/9b76375f3869440818d57.jpg', 'https://telegra.ph/file/a78443f0ee887f46808d7.jpg']
global.hneko = ['https://telegra.ph/file/805a37b1e9a963e7d7ecf.jpg', 'https://telegra.ph/file/f9c4d97477b647cf57a2b.jpg', 'https://telegra.ph/file/b6905b77e6c7732592a13.jpg', 'https://telegra.ph/file/9f82c432d0ba4cfffda9a.png', 'https://telegra.ph/file/484083949d4bfd763b8cf.jpg']
global.hbunny = ['https://telegra.ph/file/2b71a8d46d29351479fbc.jpg', 'https://telegra.ph/file/ae610571b62b5ab876e9c.jpg', 'https://telegra.ph/file/cc8255d5b989eef587af2.jpg', 'https://telegra.ph/file/30d2e7375996abd9cfee3.jpg', 'https://telegra.ph/file/78980c90c44a95a1d30fa.jpg', 'https://telegra.ph/file/2ac5d8ccf23e73eaa5bfa.jpg']
global.hbeach = ['https://telegra.ph/file/14ae0ba2da77d74e6b80c.jpg', 'https://telegra.ph/file/b6905b77e6c7732592a13.jpg', 'https://telegra.ph/file/9da45a352eb4c40e5d641.jpg', 'https://telegra.ph/file/59e78846ee365975ee6e3.jpg', 'https://telegra.ph/file/1bf7dee46b83eb4c41d7d.jpg', 'https://telegra.ph/file/0525a7929f819cb8278f3.jpg']
global.welcom = ['https://telegra.ph/file/35f17bb371d308504bc46.jpg']
global.godbye = ['https://telegra.ph/file/b44e48066aed4fb7ad291.jpg']

global.hoppai = ['https://telegra.ph/file/f34d76df4a2065af1a5ba.jpg', 'https://telegra.ph/file/05c1b22ee83bcd7723b4d.jpg', 'https://telegra.ph/file/1d886f66a44871205335f.jpg', 'https://telegra.ph/file/54d19a9094dc509370bf9.jpg', 'https://telegra.ph/file/e649475bcde78a9977ee5.jpg', 'https://telegra.ph/file/32ba20b6139b129c559c8.jpg', 'https://telegra.ph/file/948434cda49e4af5d9f11.jpg', 'https://telegra.ph/file/6f353c68533283fe79871.jpg', 'https://telegra.ph/file/de268ca9b01101acf2b8a.jpg', 'https://telegra.ph/file/fc6c5b2ae9a20c4256e7f.jpg', 'https://telegra.ph/file/efb70bb0988640f841742.jpg', 'https://telegra.ph/file/77d03fff530a2bcff3bf7.jpg', 'https://telegra.ph/file/6e4623464a659dd8d902b.jpg', 'https://telegra.ph/file/685aa39f0cb0f2c4fd85b.jpg', 'https://telegra.ph/file/10454b9ad693e1eefea58.jpg', 'https://telegra.ph/file/7de8ce5c290c3d8be0856.jpg', 'https://telegra.ph/file/8d7c4eadb7a4722747074.jpg', 'https://telegra.ph/file/ccc5f8eaac0f30919ef6c.jpg', 'https://telegra.ph/file/95f4b43439d7888f15ea5.jpg', 'https://telegra.ph/file/9c2a750db555bd2fad1f3.jpg', 'https://telegra.ph/file/efc5f7e637744fd6bfec2.jpg', 'https://telegra.ph/file/3a5231aade245665633bd.jpg', 'https://telegra.ph/file/2ecfc76feb26ec1eab99b.jpg', 'https://telegra.ph/file/dabb70983b4e833d98344.jpg', 'https://telegra.ph/file/75193a893e38fc580afe6.jpg', 'https://telegra.ph/file/217aa0f4ec76273808aa4.jpg', 'https://telegra.ph/file/8a35d3446b97ae22c7b23.jpg', 'https://telegra.ph/file/092df720701575a7ceaaa.jpg', 'https://telegra.ph/file/a65184a676cd648de34c3.jpg',
  'https://telegra.ph/file/180e28807e78419d45537.jpg', 'https://telegra.ph/file/140eff27be983e0cd6781.jpg', 'https://telegra.ph/file/1581b791e16d0029e16b5.jpg', 'https://telegra.ph/file/6a4b36372b4f265bae3bc.jpg', 'https://telegra.ph/file/093caff422f194f00bc6c.jpg', 'https://telegra.ph/file/2294b7ab49eca8a8046b2.jpg', 'https://telegra.ph/file/869224d1c417e8b5c8ff1.jpg', 'https://telegra.ph/file/a78443f0ee887f46808d7.jpg', 'https://telegra.ph/file/1889878933264d16c58bf.jpg', 'https://telegra.ph/file/735aeb47d9c4aa87aaaf3.jpg', 'https://telegra.ph/file/fcf861516db09dda164e0.jpg', 'https://telegra.ph/file/355d96d7e06d109435f67.jpg'
]
//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ MEDIA LINK ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.Linkgc = 'Bentar'
global.lynk = 'https://lynk.id/hyuuraofc'


//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ MEDIA SOSSIAL ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.sig = 'https://instagram.com/_b4c00t4an_s3l3b'
global.sgh = 'https://github.com/hyuura-official' //github
global.sgc = 'https://chat.whatsapp.com/LmbsOrpSGEpDdFdpuukmmP' //group whatsapp
global.sdc = '-' //discord

global.dtu = '?????????'
global.urlnya = "https://www.instagram.com/Deni19_"
global.dtc = '???? ?????'
global.phn = '0895-3471-98105'
global.multiplier = 70 // Semakin Tinggi levelmu semakin naik

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      role: '🏅',
      level: '🧬',
      limit: '🌌',
      health: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  },
  // js mod 3.4
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    // kode ini membuat config.js menjadi kode yang lebih mudah dipahami
    const role = [
      { name: 'Warrior V', level: 0 }, { name: 'Warrior IV', level: 4 }, { name: 'Warrior III', level: 8 }, { name: 'Warrior II', level: 12 }, { name: 'Warrior I', level: 16 },
      { name: 'Paladin V', level: 20 }, { name: 'Paladin IV', level: 24 }, { name: 'Paladin III', level: 28 }, { name: 'Paladin II', level: 32 }, { name: 'Paladin I', level: 36 },
      { name: 'Sorcerer V', level: 40 }, { name: 'Sorcerer IV', level: 44 }, { name: 'Sorcerer III', level: 48 }, { name: 'Sorcerer II', level: 52 }, { name: 'Sorcerer I', level: 56 },
      { name: 'Ranger V', level: 60 }, { name: 'Ranger IV', level: 64 }, { name: 'Ranger III', level: 68 }, { name: 'Ranger II', level: 72 }, { name: 'Ranger I', level: 76 },
      { name: 'Mage V', level: 80 }, { name: 'Mage IV', level: 84 }, { name: 'Mage III', level: 88 }, { name: 'Mage II', level: 92 }, { name: 'Mage I', level: 96 },
      { name: 'Cleric V', level: 100 }, { name: 'Cleric IV', level: 104 }, { name: 'Cleric III', level: 108 }, { name: 'Cleric II', level: 112 }, { name: 'Cleric I', level: 116 },
      { name: 'Thief V', level: 120 }, { name: 'Thief IV', level: 124 }, { name: 'Thief III', level: 128 }, { name: 'Thief II', level: 132 }, { name: 'Thief I', level: 136 },
      { name: 'Assassin V', level: 140 }, { name: 'Assassin IV', level: 144 }, { name: 'Assassin III', level: 148 }, { name: 'Assassin II', level: 152 }, { name: 'Assassin I', level: 156 },
      { name: 'Monk V', level: 160 }, { name: 'Monk IV', level: 164 }, { name: 'Monk III', level: 168 }, { name: 'Monk II', level: 172 }, { name: 'Monk I', level: 176 },
      { name: 'Bard V', level: 180 }, { name: 'Bard IV', level: 184 }, { name: 'Bard III', level: 188 }, { name: 'Bard II', level: 192 }, { name: 'Bard I', level: 196 },
      { name: 'Necromancer V', level: 200 }, { name: 'Necromancer IV', level: 204 }, { name: 'Necromancer III', level: 208 }, { name: 'Necromancer II', level: 212 }, { name: 'Necromancer I', level: 216 },
      { name: 'Warlock V', level: 220 }, { name: 'Warlock IV', level: 224 }, { name: 'Warlock III', level: 228 }, { name: 'Warlock II', level: 232 }, { name: 'Warlock I', level: 236 },
      { name: 'Wizard V', level: 240 }, { name: 'Wizard IV', level: 244 }, { name: 'Wizard III', level: 248 }, { name: 'Wizard II', level: 252 }, { name: 'Wizard I', level: 256 },
      { name: 'Sage V', level: 260 }, { name: 'Sage IV', level: 264 }, { name: 'Sage III', level: 268 }, { name: 'Sage II', level: 272 }, { name: 'Sage I', level: 276 },
      { name: 'Priest V', level: 280 }, { name: 'Priest IV', level: 284 }, { name: 'Priest III', level: 288 }, { name: 'Priest II', level: 292 }, { name: 'Priest I', level: 296 },
      { name: 'Rogue V', level: 300 }, { name: 'Rogue IV', level: 304 }, { name: 'Rogue III', level: 308 }, { name: 'Rogue II', level: 312 }, { name: 'Rogue I', level: 316 },
      { name: 'Brawler V', level: 320 }, { name: 'Brawler IV', level: 324 }, { name: 'Brawler III', level: 328 }, { name: 'Brawler II', level: 332 }, { name: 'Brawler I', level: 336 },
      { name: 'Archer V', level: 340 }, { name: 'Archer IV', level: 344 }, { name: 'Archer III', level: 348 }, { name: 'Archer II', level: 352 }, { name: 'Archer I', level: 356 },
      { name: 'Sniper V', level: 360 }, { name: 'Sniper IV', level: 364 }, { name: 'Sniper III', level: 368 }, { name: 'Sniper II', level: 372 }, { name: 'Sniper I', level: 376 },
      { name: 'Ninja V', level: 380 }, { name: 'Ninja IV', level: 384 }, { name: 'Ninja III', level: 388 }, { name: 'Ninja II', level: 392 }, { name: 'Ninja I', level: 396 },
      { name: 'Samurai V', level: 400 }, { name: 'Samurai IV', level: 404 }, { name: 'Samurai III', level: 408 }, { name: 'Samurai II', level: 412 }, { name: 'Samurai I', level: 416 },
      { name: 'Berserker V', level: 420 }, { name: 'Berserker IV', level: 424 }, { name: 'Berserker III', level: 428 }, { name: 'Berserker II', level: 432 }, { name: 'Berserker I', level: 436 },
      { name: 'Legend V', level: 440 }, { name: 'Legend IV', level: 444 }, { name: 'Legend III', level: 448 }, { name: 'Legend II', level: 452 }, { name: 'Legend I', level: 456 },
      { name: 'Champion V', level: 460 }, { name: 'Champion IV', level: 464 }, { name: 'Champion III', level: 468 }, { name: 'Champion II', level: 472 }, { name: 'Champion I', level: 476 },
      { name: 'Grandmaster V', level: 480 }, { name: 'Grandmaster IV', level: 484 }, { name: 'Grandmaster III', level: 488 }, { name: 'Grandmaster II', level: 492 }, { name: 'Grandmaster I', level: 496 },
      { name: 'Elder V', level: 500 }, { name: 'Elder IV', level: 504 }, { name: 'Elder III', level: 508 }, { name: 'Elder II', level: 512 }, { name: 'Elder I', level: 516 },
      { name: 'Immortal V', level: 520 }, { name: 'Immortal IV', level: 524 }, { name: 'Immortal III', level: 528 }, { name: 'Immortal II', level: 532 }, { name: 'Immortal I', level: 536 },
      { name: 'Nephalem V', level: 540 }, { name: 'Nephalem IV', level: 544 }, { name: 'Nephalem III', level: 548 }, { name: 'Nephalem II', level: 552 }, { name: 'Nephalem I', level: 556 },
      { name: 'Eternal V', level: 560 }, { name: 'Eternal IV', level: 564 }, { name: 'Eternal III', level: 568 }, { name: 'Eternal II', level: 572 }, { name: 'Eternal I', level: 576 },
      { name: 'Neptune V', level: 580 }, { name: 'Neptune IV', level: 584 }, { name: 'Neptune III', level: 588 }, { name: 'Neptune II', level: 592 }, { name: 'Neptune I', level: 596 },
      { name: 'Pluto V', level: 600 }, { name: 'Pluto IV', level: 604 }, { name: 'Pluto III', level: 608 }, { name: 'Pluto II', level: 612 }, { name: 'Pluto I', level: 616 },
      { name: 'Eris V', level: 620 }, { name: 'Eris IV', level: 624 }, { name: 'Eris III', level: 628 }, { name: 'Eris II', level: 632 }, { name: 'Eris I', level: 636 },
      { name: 'Ascension V', level: 640 }, { name: 'Ascension IV', level: 644 }, { name: 'Ascension III', level: 648 }, { name: 'Ascension II', level: 652 }, { name: 'Ascension I', level: 656 },
      { name: 'Elysium V', level: 660 }, { name: 'Elysium IV', level: 664 }, { name: 'Elysium III', level: 668 }, { name: 'Elysium II', level: 672 }, { name: 'Elysium I', level: 676 },
      { name: 'Ether V', level: 680 }, { name: 'Ether IV', level: 684 }, { name: 'Ether III', level: 688 }, { name: 'Ether II', level: 692 }, { name: 'Ether I', level: 696 },
      { name: 'Gaea V', level: 700 }, { name: 'Gaea IV', level: 704 }, { name: 'Gaea III', level: 708 }, { name: 'Gaea II', level: 712 }, { name: 'Gaea I', level: 716 },
      { name: 'Hades V', level: 720 }, { name: 'Hades IV', level: 724 }, { name: 'Hades III', level: 728 }, { name: 'Hades II', level: 732 }, { name: 'Hades I', level: 736 },
      { name: 'Heimdall V', level: 740 }, { name: 'Heimdall IV', level: 744 }, { name: 'Heimdall III', level: 748 }, { name: 'Heimdall II', level: 752 }, { name: 'Heimdall I', level: 756 },
      { name: 'Hyperion V', level: 760 }, { name: 'Hyperion IV', level: 764 }, { name: 'Hyperion III', level: 768 }, { name: 'Hyperion II', level: 772 }, { name: 'Hyperion I', level: 776 },
      { name: 'Iris V', level: 780 }, { name: 'Iris IV', level: 784 }, { name: 'Iris III', level: 788 }, { name: 'Iris II', level: 792 }, { name: 'Iris I', level: 796 },
      { name: 'Jupiter V', level: 800 }, { name: 'Jupiter IV', level: 804 }, { name: 'Jupiter III', level: 808 }, { name: 'Jupiter II', level: 812 }, { name: 'Jupiter I', level: 816 },
      { name: 'Kronos V', level: 820 }, { name: 'Kronos IV', level: 824 }, { name: 'Kronos III', level: 828 }, { name: 'Kronos II', level: 832 }, { name: 'Kronos I', level: 836 },
      { name: 'Lilith V', level: 840 }, { name: 'Lilith IV', level: 844 }, { name: 'Lilith III', level: 848 }, { name: 'Lilith II', level: 852 }, { name: 'Lilith I', level: 856 },
      { name: 'Maelstrom V', level: 860 }, { name: 'Maelstrom IV', level: 864 }, { name: 'Maelstrom III', level: 868 }, { name: 'Maelstrom II', level: 872 }, { name: 'Maelstrom I', level: 876 },
      { name: 'Nova V', level: 880 }, { name: 'Nova IV', level: 884 }, { name: 'Nova III', level: 888 }, { name: 'Nova II', level: 892 }, { name: 'Nova I', level: 896 },
      { name: 'Odin V', level: 900 }, { name: 'Odin IV', level: 904 }, { name: 'Odin III', level: 908 }, { name: 'Odin II', level: 912 }, { name: 'Odin I', level: 916 },
      { name: 'Osiris V', level: 920 }, { name: 'Osiris IV', level: 924 }, { name: 'Osiris III', level: 928 }, { name: 'Osiris II', level: 932 }, { name: 'Osiris I', level: 936 },
      { name: 'Poseidon V', level: 940 }, { name: 'Poseidon IV', level: 944 }, { name: 'Poseidon III', level: 948 }, { name: 'Poseidon II', level: 952 }, { name: 'Poseidon I', level: 956 },
      { name: 'Ragnarok V', level: 960 }, { name: 'Ragnarok IV', level: 964 }, { name: 'Ragnarok III', level: 968 }, { name: 'Ragnarok II', level: 972 }, { name: 'Ragnarok I', level: 976 },
      { name: 'Saturn V', level: 980 }, { name: 'Saturn IV', level: 984 }, { name: 'Saturn III', level: 988 }, { name: 'Saturn II', level: 992 }, { name: 'Saturn I', level: 996 },
      { name: 'Titan V', level: 1000 }, { name: 'Titan IV', level: 1004 }, { name: 'Titan III', level: 1008 }, { name: 'Titan II', level: 1012 }, { name: 'Titan I', level: 1016 },
      { name: 'Uranus V', level: 1020 }, { name: 'Uranus IV', level: 1024 }, { name: 'Uranus III', level: 1028 }, { name: 'Uranus II', level: 1032 }, { name: 'Uranus I', level: 1036 },
      { name: 'Venus V', level: 1040 }, { name: 'Venus IV', level: 1044 }, { name: 'Venus III', level: 1048 }, { name: 'Venus II', level: 1052 }, { name: 'Venus I', level: 1056 },
      { name: 'Zeus V', level: 1060 }, { name: 'Zeus IV', level: 1064 }, { name: 'Zeus III', level: 1068 }, { name: 'Zeus II', level: 1072 }, { name: 'Zeus I', level: 1076 },
    ]

    return role.reverse().find(role => level >= role.level)
  }
  
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
