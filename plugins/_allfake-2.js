/* 
* By Arifzyn
* Jangan di hapus !
* Kalo Mau Di Tambah Di Bawah ini ajh 
*/

import fetch from 'node-fetch'
import moment from 'moment-timezone'

export async function before(m, { conn }) {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let sapa = ['Hai', 'Ohayo', 'Kyaa', 'Halo', 'Nyann'].getRandom()
	let curr = ['AED','AFN','ALL','AMD','ANG','AOA','ARS','AUD','AWG','AZN','BAM','BBD','BDT','BGN','BHD','BIF','BMD','BND','BOB','BOV','BRL','BSD','BTN','BWP','BYR','BZD','CAD','CDF','CHE','CHF','CHW','CLF','CLP','CNY','COP','COU','CRC','CUC','CUP','CVE','CZK','DJF','DKK','DOP','DZD','EGP','ERN','ETB','EUR','FJD','FKP','GBP','GEL','GHS','GIP','GMD','GNF','GTQ','GYD','HKD','HNL','HRK','HTG','HUF','IDR','ILS','INR','IQD','IRR','ISK','JMD','JOD','JPY','KES','KGS','KHR','KMF','KPW','KRW','KWD','KYD','KZT','LAK','LBP','LKR','LRD','LSL','LTL','LVL','LYD','MAD','MDL','MGA','MKD','MMK','MNT','MOP','MRO','MUR','MVR','MWK','MXN','MXV','MYR','MZN','NAD','NGN','NIO','NOK','NPR','NZD','OMR','PAB','PEN','PGK','PHP','PKR','PLN','PYG','QAR','RON','RSD','RUB','RWF','SAR','SBD','SCR','SDG','SEK','SGD','SHP','SLL','SOS','SRD','SSP','STD','SYP','SZL','THB','TJS','TMT','TND','TOP','TRY','TTD','TWD','TZS','UAH','UGX','USD','USN','USS','UYI','UYU','UZS','VEF','VND','VUV','WST','XAF','XAG','XAU','XBA','XBB','XBC','XBD','XCD','XDR','XFU','XOF','XPD','XPF','XPT','XTS','XXX','YER','ZAR','ZMW'].getRandom()
	let pp = await conn.profilePictureUrl(who, 'image').catch(_ => hwaifu.getRandom())
	
    // jpegThumbnail
    let _situm = await conn.resize(thumbnailUrl.getRandom(), 300, 150)
    let sipp = await conn.resize(pp, 150, 150)

    global.miku = 'https://telegra.ph/file/2362fdd0ac773d5733bc5.jpg'

let ftrolii = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 999999,
    status: 404,
    surface : 404,
    message: `Miku Punya Gweh !! :v\nBy ArifzynXD`, 
    orderTitle: ``,
    thumbnail: await (await fetch('https://telegra.ph/file/2362fdd0ac773d5733bc5.jpg')).buffer(), 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }

let ftokoo = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
	   	productMessage: {
			product: {
			productImage: {
			mimetype: 'image/jpeg',
			jpegThumbnail: await (await fetch('https://telegra.ph/file/2362fdd0ac773d5733bc5.jpg')).buffer(), 
			},
			title: ' Bot WhatsApp By ' + nameown1,
			description: botdate,
			currencyCode: 'IDR',
			priceAmount1000: fsizedoc,
			retailerId: 'Ghost',
			productImageCount: 1
			},
			businessOwnerJid: '0@s.whatsapp.net'
			}
		  }
	    }

let fvnn = {
			key: {
		  participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
			audioMessage: {
			mimetype: 'audio/ogg; codecs=opus',
			seconds: fsizedoc,
			ptt: true,
      jpegThumbnail: await (await fetch('https://telegra.ph/file/2362fdd0ac773d5733bc5.jpg')).buffer()
			}
			}
	  	}
	  	
let fvidd = {
			key: {
			participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
			videoMessage: {
			title: author,
			h: 'Hmm',
			seconds: fsizedoc,
			caption: ucapan(),
			jpegThumbnail: await (await fetch('https://telegra.ph/file/2362fdd0ac773d5733bc5.jpg')).buffer()
			}
			}
	  	}

let fLoc = {
			key: {
			participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
			liveLocationMessage: {
			caption: 'Bot WhatsApp By ' + nameown1,
			h: botdate,
	  	jpegThumbnail: await (await fetch('https://telegra.ph/file/2362fdd0ac773d5733bc5.jpg')).buffer()
			}
			}
	  	}

let fdoc = {
			key: {
			participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
		  documentMessage: {
			title: author,
			jpegThumbnail: await (await fetch('https://telegra.ph/file/2362fdd0ac773d5733bc5.jpg')).buffer()
			}
			}
		  }
		
let fgiff = {
			key: {
			participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
			videoMessage: {
			title: 'Bot WhatsApp By ' + nameown1,
			h: 'Hmm',
			seconds: fsizedoc,
			gifPlayback: true,
			caption: botdate,
			jpegThumbnail: await (await fetch('https://telegra.ph/file/2362fdd0ac773d5733bc5.jpg')).buffer()
			}
			}
	  	}

let doc = { 
			key: {
			fromMe: false, 
			participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "" } : {}) 
			},
			"message": {
			"stickerMessage": {
			"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
			"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
			"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
			"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
			"mimetype": "image/webp",
			"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
			"fileLength": "14240",
			"mediaKeyTimestamp": "1664991742",
			"isAnimated": false
			}
			}
			}

let _fek = [ftrolii, ftokoo, fvnn, fvidd, fLoc, fdoc, fgiff].getRandom()
global.fakes = _fek
global.bdoc = doc

}

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam 🌙"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}