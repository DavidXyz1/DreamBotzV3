/*
JANGAN HAPUS TQTO NYA KAKAK
HARGAIN DIKIT LAH

「 THANKS TO」
• MHANK BARBAR UNTUK BASE NYA
• HARDIANTO
• DAVID XYZ
• DAPPA UHUY
• VEAN XYZ
• DIKA ARDIANTA
• AQULZ
• LOLHUMAN
• LEYSCODERS API
• DAN SEMUA BASE BOT WA
*/
const {
  WAConnection,
  MessageType,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  processTime
} = require('@adiwajshing/baileys')
const fs = require('fs')
const axios = require("axios")
const speed = require('performance-now')
const request = require('request')
const qrcodes = require("qrcode")
const imgbb = require('imgbb-uploader')
const toMs = require('ms')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const phoneNum = require('awesome-phonenumber')
const ffmpeg = require('fluent-ffmpeg')
const imageToBase64 = require('image-to-base64')
const lolis = require('lolis.life')
const loli = new lolis()
const Exif = require('./lib/exif');
const exif = new Exif();

//********** FUNCTIONS **********//
const { removeBackgroundFromImageFile } = require('remove.bg')
const { color, bgcolor } = require('./lib/color')
const prem = JSON.parse(fs.readFileSync('./src/prem.json'))
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require('child_process')
const { uploadimg } = require('./lib/uploadimg')

//********** DATABASE **********//
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//*********** CUSTOMABLE ***********//
prefix = '' 
f = '_'
s = '*'
blocked = []
nomerowner = '6285865829368'
fakeimage = fs.readFileSync(`./image/cewek.jpeg`)
numbernye = '0' 
namabot = '*DREAM BOTZ*' //GANTI NAMA BOTZ KALIAN
namaowner = 'David Xyz' //GANTI NAMA KALIAN
public = true
let premium = []

const Lolkey = 'API LOLHUM' //BELI BG JAN CARI YANG GRATISAN MULU
const LolKey = 'API LOLHUM' //BELI BG JAN CARI YANG GRATISAN MULU
const LeysKey = 'API LEYS' //BELI BG JAN CARI YANG GRATISAN MULU

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
function tanggal(){
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function monospace(string) {
return '```' + string + '```'
}

async function starts() {
	const david = new WAConnection()
	david.logger.level = 'warn'
	console.log(banner.string)
	david.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./mek.json') && david.loadAuthInfo('./mek.json')
	david.on('connecting', () => {
		start('2', 'Bentar Kak')
	})
	david.on('open', () => {
		success('2', 'Tersambung')
	})
	await david.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./mek.json', JSON.stringify(david.base64EncodedAuthInfo(), null, '\t'))

	david.on('group-update', async(chat) => {
    console.log(chat)
    var from = chat.jid
    var group = await david.groupMetadata(from)
    if(!chat.desc == ''){
    var tag = chat.descOwner.split('@')[0] + '@s.whatsapp.net'
    var teks = `「 *Group Description Change* 」\n\nDeskripsi Group telah diubah oleh\n❒ ${s}Admin : @${chat.descOwner.split('@')[0]}${s}\n❒ ${s}Pada : ${tanggal()}${s}\n❒ ${s}Deskripsi Baru${s} :\n ${chat.desc}`
    david.sendMessage(group.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}})
    console.log(`「 *Group Description Change* 」 In ${group.subject}`)
    } else if(chat.announce == 'false') {
	var opengc = `「 *Group Opened* 」\n\n${s}Group Telah Dibuka Oleh Admin${s}\n_Sekarang Semua Member Bisa Mengirim Pesan_`
	david.sendMessage(group.id, opengc, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: `0@s.whatsapp.net` }, message: { groupInviteMessage: { groupJid: "62816566217-1617422360@g.us", inviteCode: "EiznDZqIWu40QPVO0Q9MVn", groupName: "𝐀𝐍𝐈𝐌𝐄 𝐋𝐎𝐕𝐄𝐑𝐒 𝐈𝐍𝐃𝐎𝐍𝐄𝐒𝐈𝐀", caption: "*YTEAM BOTZ*Create By : *DAVID*", 'jpegThumbnail': fs.readFileSync('./media/cewek.jpeg')} } }})
    } else if(chat.announce == 'true') {
	var closegc = `「 *Group Closed* 」\n\n${s}Group Telah Ditutup Oleh Admin${s}\n_Sekarang Semua Member Tidak Dapat Mengirim Pesan_`
	david.sendMessage(group.id, closegc, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: `0@s.whatsapp.net` }, message: { groupInviteMessage: { groupJid: "62816566217-1617422360@g.us", inviteCode: "EiznDZqIWu40QPVO0Q9MVn", groupName: "𝐀𝐍𝐈𝐌𝐄 𝐋𝐎𝐕𝐄𝐑𝐒 𝐈𝐍𝐃𝐎𝐍𝐄𝐒𝐈𝐀", caption: "*YTEAM BOTZ*Create By : *DAVID*", 'jpegThumbnail': fs.readFileSync('./media/cewek.jpeg')} } }})
    } else if(anu.restrict == 'false'){
    teks = `「 *Group Setting Change* 」\n\n${s}Edit Group info telah dibuka untuk member${s}\nSekarang semua member dapat mengedit info Group Ini`
    david.sendMessage(group.id, teks, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: `0@s.whatsapp.net` }, message: { groupInviteMessage: { groupJid: "62816566217-1617422360@g.us", inviteCode: "EiznDZqIWu40QPVO0Q9MVn", groupName: "𝐀𝐍𝐈𝐌𝐄 𝐋𝐎𝐕𝐄𝐑𝐒 𝐈𝐍𝐃𝐎𝐍𝐄𝐒𝐈𝐀", caption: "*YTEAM BOTZ*\nCreate By : *DAVID*", 'jpegThumbnail': fs.readFileSync('./media/cewek.jpeg')} } }})
    console.log(`- [ Group Setting Change ] - In ${group.subject}`)
    } else if(anu.restrict == 'true'){
    teks = `「 *Group Setting Change* 」\n\n${s}Edit Group info telah ditutup untuk member${s}\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    david.sendMessage(group.id, teks, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: `0@s.whatsapp.net` }, message: { groupInviteMessage: { groupJid: "62816566217-1617422360@g.us", inviteCode: "EiznDZqIWu40QPVO0Q9MVn", groupName: "                          ", caption: "*YTEAM BOTZ*\nCreate By : *DAVID*", 'jpegThumbnail': fs.readFileSync('./media/cewek.jpeg')} } }})
    console.log(`- [ Group Setting Change ] - In ${group.subject}`)
    }
    }) 
david.on('group-participants-update', async (anu) => {
		try {
			const mdata = await david.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await david.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `
*WELCOME  @${num.split('@')[0]}* 
━━━━━━━━━━━━━━━━━━━━━━━
Welcome To Group *${mdata.subject}*
Semoga Betah Ye 

「◪━━━━━━ *INTRO* ━━━━━━━
┃
┃▢ Nama : 
┃▢ Gender :
┃▢ Asal : 
┃▢ Umur : 
┃▢ Jomblo : ?
┃  _*Say Hy To Members Group*_
┃  _Dont To Spam Me Or I'am Banned_
┗━━━━━━━━━━━━━━━━━━━━━
`
				let buff = await getBuffer(ppimg)
				david.sendMessage(mdata.id, teks, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: `0@s.whatsapp.net` }, message: { groupInviteMessage: { groupJid: "62816566217-1617422360@g.us", inviteCode: "EiznDZqIWu40QPVO0Q9MVn", groupName: "                          ", caption: "*YTEAM BOTZ*\nCreate By : *DAVID*", 'jpegThumbnail': fs.readFileSync('./media/cewek.jpeg')} } }})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await david.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*「 GROUP LEAVE DETECT 」*

◪ User : *@${num.split('@')[0]}*
◪ Leave From : *${mdata.subject}*
Good By Beban Gc`
				let buff = await getBuffer(ppimg)
				david.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'promote') {
			const mdata = await david.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await david.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `*「 PROMOTE GROUP DETECT 」*

◪ User : *@${num.split('@')[0]}*
◪ Promote Group : *${mdata.subject}*
Ekhh @${num.split('@')[0]} Rusuhin Aee Nih Gc Mumpung Lu Admin
Awokawokaowk`
			david.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Kntl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `PROMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await david.groupMetadata(anu.jid)
			try {
					ppimg = await david.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `*「 DEMOTE GROUP DETECT 」*

◪ User : *@${num.split('@')[0]}*
◪ Demote Group  : *${mdata.subject}*
`
			david.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Ktl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `DEMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})

david.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        david.sendMessage(callerId, "Auto block system, don't call please", MessageType.text)
        await sleep(4000)
        await david.blockUser(callerId, "add") // Block user
})
	david.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
	david.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
	//		if (!mek.key.fromMe) return
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey    
			const { text, extendedText, contact, caption, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const date = new Date().toLocaleDateString()
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')
            const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
            const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
         
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
		const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
	    body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
	    budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
	    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
	    const args = body.trim().split(/ +/).slice(1)
	    const isCmd = body.startsWith(prefix)
	    const stickCmd = type == 'stickerMessage' ? mek.message.stickerMessage.fileSha256.toString('base64') : '' || ''
	    chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const arg = chats.slice(command.length + 2, chats.length)
			
			mess = {
		    prem: '_*Anda Bukan User Prem, Silahkan Hubungi Owner Untuk Menjadi User Premium*_',
		    wait: '*Meluncur*',
		    success: '*Sukses Bang*️',
		    error: {
					stick: '*Maaf Kak Fitur Sedang Eror Silahkan Hubungi Owner Untuk Memperbaiki Fitur*',
					Iv: '*Link Nya Kek Nya Salah*'
				},
				only: {
					group: '*[ ! ]* Perintah ini Hanya Bisa Digunakan Di Grup',
					ownerG: '*[ ! ]* Perintah ini Hanya Bisa Digunakan Oleh Admin Grup',
					ownerB: '*[ ! ]*  Hanya Bisa Digunakan Oleh CEO *mek BOT*',
					admin: '*[ ! ]* Perintah ini Hanya Bisa Digunakan Oleh Admin Grup',
					Badmin: '*[ ! ]* Perintah ini Bisa Digunkaan Ketik bot Menjadi Admin'
				}
			}
            const totalchat = await david.chats.all()
			const botNumber = david.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await david.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const itsMe = sender == botNumber ? true : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isPremium = premium.includes(sender)
			const isOwner = ownerNumber.includes(sender)
			const q = args.join(' ')
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				david.sendMessage(from, teks, text, {quoted:freply})
			}
			 const reply1 = (teks) => {
            return david.sendMessage(from, teks, text, {quoted: freply, thumbnail: fs.readFileSync(`image/kera.jpeg`)})
           }
			const sendMess = (hehe, teks) => {
				david.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? david.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : david.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			    function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
             }

          const fakegroup = (teks) => {
			david.sendMessage(from, teks, text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281226770537-1604595598@g.us" } : {})
					},
					message: {
						conversation: fake
					}
				}
			})
		}
const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `Hallo Mastah`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;`Halll Mastah`,;;;\nFN:`Halllo Mastah`,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./image/01 jpeg')}}}
const fdocu = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/02.jpeg')}}}
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `*YTEAM BOTZ*\nCREATE BY : *DAVID*`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`image/01.jpeg`)} } }
const ftroli = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `*YTEAM BOTZ*\nCREATE BY : *DAVID*`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`image/03.jpeg`)} } }

const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./image/menu.jpeg`)
					},
					"title": fake,
					"description": "SELF BOT",
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
             const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${namaowner}︎\n`
            + `ORG:Owner ${namabot};\n`
            + `TEL;type=CELL;type=VOICE;waid=${nomerowner}:+${nomerowner}\n`
            + 'END:VCARD'
     const uploadImages = (buffData, type) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
    const { ext } = await fromBuffer(buffData)
    const cmd = text.toLowerCase()
    const filePath = 'utils/tmp.' + ext
    const _buffData = type ? await resizeImage(buffData, false) : buffData
    fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => {
                    if (res.error) return reject(res.error)
                    resolve('https://telegra.ph' + res[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch(err => reject(err))
        })
    })
}



			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage') 
//==================================== ANTILINK OM =======================================//
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                david.groupRemove(from, [sender])
            }
        }
     if (itsMe){
     if(chats.toLowerCase() == `${prefix}self`){
     public = false
     david.sendMessage(from, `Success`, `STATUS : SELF`)
      }
     if (chats.toLowerCase() == 'status'){
     david.sendMessage(from, `STATUS : ${public ? 'PUBLIC' : 'SELF'}`)
      }
      }
   
      if (!public){
      if (!mek.key.fromMe) return
      }
//============== ANTILINK =================//
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
        if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
        reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
        david.groupRemove(from, [sender])
          }
        }
//============================ EVAL ===================//
             if (body.startsWith(">")){
            if (!mek.key.fromMe) return 
            console.log(color("DARI OWNER AWOKSAWOKSAWOKS"))
                try {
                    let evaled = await eval(args.join(' '))
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    reply(`${evaled}`)
                } catch (err) {
                    reply(`${err}`)
                }
            } else if (chats.startsWith("$")){
                console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                exec(chats.slice(2), (err, stdout) => {
					if (err) return reply(`${err}`)
					if (stdout) reply(`${stdout}`)
				}
				})
//============== FUNCTION TICTACTOE ============= //
            if (isTicTacToe(from, tictactoe)) tictac(budy, prefix, tictactoe, from, sender, reply, mentions)        

			if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIVATE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && !isCmd) console.log(color(time, "white"), color("[  GROUP  ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
            if (!isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
			let authorname = david.contacts[from] != undefined ? david.contacts[from].vname || david.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Sticker By'; if (!author) author = 'Yteam Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			} 
			switch(command) {
//================================================== BATAS BG ============================================================//
                case 'menu':
                //JANGAN DI HAPUSS YE TQTO NYA HARGAIN LAH
                const statusbot = public ? 'PUBLIC MODE': 'SELF MODE'
                reply(`Loading Menu ${namabot}`)
                const nye = fs.readFileSync('./image/01.jpeg')
                const bek = fs.readFileSync('./image/03.jpeg'
                const numowner = ['6285865829368@s.whatsapp.net']
                const mark = ['0@s.whatsapp.net']
                const david = ['6287880120452@s.whatsapp.net']
                const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model, device_network, cpu_device, device_battery, device_ram } = david.user.phone
        memek = `
Create By : @${numowner.split('@')[0]}
Github : https://github.com/dreamteam14
Thanks To @${mark.split('@')[0]} Untuk Izin Nya
Thanks To @${david.split('@')[0]} 
Dan Terima Kasih Untuk MhankBarBar
Dan Juga Semua Creator Bot Whatsapp

◪ <SELF/PUBLIC>
=> ${s}${prefix}self${s}
=> ${s}${prefix}public${s}

◪ </GROUP MENU>
=> ${s}${prefix}welcome 1/0${s}
=> ${s}${prefix}antilink 1/0${s}
=> ${s}${prefix}getpic @user${s}
=> ${s}${prefix}getbio @user${s}
=> ${s}${prefix}getsatus @user${s}
=> ${s}${prefix}getprofil @user${s}
=> ${s}${prefix}promote @user${s}
=> ${s}${prefix}demote @admin${s}
=> ${s}${prefix}hidetag${s}
=> ${s}${prefix}setname${s}
=> ${s}${prefix}setdesc${s}

◪ </OWNER MENU>
=> ${s}${prefix}public${s}
=> ${s}${prefix}self${s}
=> ${s}> 「 Code 」${s}
=> ${s}${prefix}buggc${s}
=> ${s}${prefix}status${s}
=> ${s}${prefix}shutdown${s}

◪ </COMMAND STICKER>
=> ${s}${prefix}sticker${s}
=> ${s}${prefix}s${s}
=> ${s}${prefix}stiker${s}
=> ${s}${prefix}stickergif${s}
=> ${s}${prefix}sgif${s}
=> ${s}${prefix}tostiker${s}

◪ </𝙏𝙊𝙊𝙇𝙎 𝙈𝙀𝙉𝙐>
=> ${s} ${prefix}base64encode${a}
=> ${s} ${prefix}base64decode${a}
=> ${s} ${prefix}base32hexencode${a}
=> ${s} ${prefix}base32hexdecode${a}
=> ${s} ${prefix}binaryencode${a}
=> ${s} ${prefix}binarydecode${a}
=> ${s} ${prefix}octalencode${a}
=> ${s} ${prefix}octaldecode${a}
=> ${s} ${prefix}hexencode${a}
=> ${s} ${prefix}hexdecode${a}
=> ${s} ${prefix}shortlink${a}
=> ${s} ${prefix}shortlink2${a}
=> ${s} ${prefix}shortlink3${a}

◪ </SERTI MENU>
=> ${s}${prefix}tololserti${s}
=> ${s}${prefix}fuckboyserti${s}
=> ${s}${prefix}fuckgirlserti${s}
=> ${s}${prefix}bucinserti${s}
=> ${s}${prefix}pacarserti${s}
=> ${s}${prefix}goodboyserti${s}
=> ${s}${prefix}goodgirlserti${s}
=> ${s}${prefix}badboyserti${s}
=> ${s}${prefix}badgirlserti${s}
=> ${s}${prefix}hekelserti${s}
=> ${s}${prefix}fftourserti${s}
=> ${s}${prefix}fftourserti2${s}
=> ${s}${prefix}fftourserti3${s}
=> ${s}${prefix}fftourserti4${s}
=> ${s}${prefix}fftourserti5${s}
=> ${s}${prefix}mltourserti${s}
=> ${s}${prefix}mltourserti2${s}
=> ${s}${prefix}mltourserti3${s}
=> ${s}${prefix}mltourserti4${s}
=> ${s}${prefix}mltourserti5${s}
=> ${s}${prefix}pubgtourserti${s}
=> ${s}${prefix}pubgtourserti2${s}
=> ${s}${prefix}pubgtourserti3${s}
=> ${s}${prefix}pubgtourserti4${s}
=> ${s}${prefix}pubgtourserti5${s}

◪ </WIBU MENU>
=> ${s} ${prefix}dewabatch${a}
=> ${s} ${prefix}kusonime${a} <anime>
=> ${s} ${prefix}randomnekonime${a}
=> ${s} ${prefix}randomanime${a}
=> ${s} ${prefix}randomwaifu${a}
=> ${s} ${prefix}animesaran${a}
=> ${s} ${prefix}animesaran2${a}
=> ${s} ${prefix}storyanime${a}
=> ${s} ${prefix}wait${a}
=> ${s} ${prefix}fuutarou${a}
=> ${s} ${prefix}itsuki${a}
=> ${s} ${prefix}miku${a}
=> ${s} ${prefix}nino${a}
=> ${s} ${prefix}yotsuba${a}
=> ${s} ${prefix}ichika${a}
=> ${s} ${prefix}tanjiro${a}
=> ${s} ${prefix}nezuko${a}
=> ${s} ${prefix}zenitsu${a}
=> ${s} ${prefix}giyu${a}
=> ${s} ${prefix}sakonji${a}
=> ${s} ${prefix}inosuke${a}
=> ${s} ${prefix}shinobu${a}
=> ${s} ${prefix}kanao${a}
=> ${s} ${prefix}sayu${a}
=> ${s} ${prefix}yoshida${a}
=> ${s} ${prefix}airi${a}
=> ${s} ${prefix}asami${a}
=> ${s} ${prefix}hashimoto${a}
=> ${s} ${prefix}yuzuha${a}
=> ${s} ${prefix}eren${a}
=> ${s} ${prefix}mikasa${a}
=> ${s} ${prefix}armin${a}
=> ${s} ${prefix}levi${a}
=> ${s} ${prefix}bertholdt
=> ${s} ${prefix}erwin${a}
=> ${s} ${prefix}reiner${a}
=> ${s} ${prefix}annie${a}
=> ${s} ${prefix}hanji${a}
=> ${s} ${prefix}jean${a}
=> ${s} ${prefix}connie${a}
=> ${s} ${prefix}historia${a}
=> ${s} ${prefix}sasha${a}
=> ${s} ${prefix}grisha${a}
=> ${s} ${prefix}pixis${a}
=> ${s} ${prefix}frieda${a}
=> ${s} ${prefix}carla${a}
=> ${s} ${prefix}marco${a}
=> ${s} ${prefix}ymir${a}
=> ${s} ${prefix}floch${a}
=> ${s} ${prefix}anka${a}
=> ${s} ${prefix}eld${a}
=> ${s} ${prefix}rico${a}
=> ${s} ${prefix}petra${a}
=> ${s} ${prefix}ai${a}
=> ${s} ${prefix}momoe${a}
=> ${s} ${prefix}neirul${a}
=> ${s} ${prefix}rika${a}

◪ </ASUPAN MENU>
=> ${s}${prefix}asuapan${s}
=> ${s}${prefix}asupansantuy${s}
=> ${s}${prefix}asupanbocil${s}
=> ${s}${prefix}asuapnukty${s}
=> ${s}${prefix}asupanrikagusriani${s}
=> ${s}${prefix}asupanghea${s}

◪  *「 THANKS TO 」*
┃▢ ALLAH SWT
┃▢ DAVID XYZ
┃▢ DAPPA UHUY
┃▢ HARDIANTO
┃▢ VEAN XYZ
┃▢ LORD AQULZ
┃▢ REST API LOLHUM
┃▢ ALL CREATOR BOT WA
╰────────────────────`
                   drm.sendMessage(from, nye, MessageType.image, { thumbnail: bek, caption: memek, quoted: freply})
                   break
//==================================== ASUPAN MENU =======================================//
                case 'asupan':
				case 'asupansantuy':
				case 'asupanbocil':
				case 'asupanukty':
				case 'asupanrikagusriani':
				case 'asupanghea':
				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/asupan/${command}`)
				pideo = await getBuffer(dapgz.result.url)
				david.sendMessage(from, pideo, video, {quoted: freply})
				break
//==================================== WIBOE MENU =======================================//
               case 'dewabatch':

				reply(mess.wait)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/dewabatch?apikey=${LeysKey}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Judul : ${i.title}\nImage : ${i.img}\nDeskripsi : ${i.desc}\nUrl : ${i.url}\n=================\n`
				}
                reply(teks.trim())
				
				break
				case 'kusonime':
                q = args.join(' ')
				reply(mess.wait)
				anu = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${LolKey}&query=${q}`)
				hsl = anu.result
				foto = await getBuffer(hsl.thumbnail)
				teks = `Title : ${hsl.title}\nJapanese : ${hsl.japanese}\nGenre : ${hsl.genre}\nSeasons : ${hsl.seasons}\nProducers : ${hsl.producers}\nType : ${hsl.type}\nStatus : ${hsl.status}\nTotal Episode : ${hsl.total_episode}\nScore : ${hsl.score}\nDuration : ${hsl.duration}\nReleased On : ${hsl.released_on}`
				david.sendMessage(from, foto, image, {quoted: freply, caption: teks})
				
				break
				case 'storyanime':
                reply(mess.wait)
                woeee = await fetchJson(`https://dapuhy-api.herokuapp.com/api/anime/storyanime`)
                davidgnzz = await getBuffer(woeee.result)
                david.sendMessage(from, davidgnzz, video, {quoted: freply})
                
                break
			    case 'randomnekonime':

				reply(mess.wait)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nekonime?apikey=${LeysKey}`)
				dapuhy = await getBuffer(anu.result)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'randomanime':

				reply(mess.wait)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/random-nimek?apikey=${LeysKey}`)
				dapuhy = await getBuffer(anu.result)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'randomwaifu':

				reply(mess.wait)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/random-waifu?apikey=${LeysKey}`)
				dapuhy = await getBuffer(anu.result)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'randomneko':

				reply(mess.wait)
				dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/random/neko?apikey=${LolKey}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'fuutarou':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=fuutarou%20uesugi`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'itsuki':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=itsuki%20nakano`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'miku':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=miku%20nakano`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'nino':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=nino%20nakano`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'yotsuba':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=yotsuba%20nakano`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'ichika':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=ichika%20nakano`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'tanjiro':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=tanjiro%20kamado`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'nezuko':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=nezuko%20kamado`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'zenitsu':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=zenitsu%20agatsuma`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'giyu':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=giyu%20tomioka`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'sakonji':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=sakonji%20urokodaki`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'inosuke':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=inosuke%20hashibira`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'shinobu':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=shinobu%20kocho`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'kanao':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=kanao%20tsuyuri`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'sayu':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=sayu%20ogiwara`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'yoshida':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=yoshida`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'airi':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=airi%20gotou`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'asami':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=asami%20yuuki`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'hashimoto':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=hashimoto`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'yuzuha':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=yuzuha%20mishima`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'eren':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=eren%20yeager`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'mikasa':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=mikasa%20ackerman`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'armin':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=armin%20arlert`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'levi':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=levi%20ackerman`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'bertholdt':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=bertholdt%20hoover`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'erwin':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=erwin%20smith`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'reiner':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=reiner%20braun`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'annie':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=annie%20leonhart`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'hanji':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=hanji%20zoe`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'jean':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=jean%20kirstein`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'connie':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=connie%20springer`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'historia':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=historia%20reiss`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'sasha':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=sasha%20braus`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'grisha':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=grisha%20jaeger`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'pixis':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=dot%20pixis`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'frieda':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=frieda%20reiss`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'carla':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=carla%20jaeger`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'marco':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=marco%20bodt`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'ymir':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=ymir%20attack%20on%20titan`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'floch':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=floch%20forster`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'anka':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=anka%20rheinberger`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'eld':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=eld%20gin`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'rico':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=rico%20brzenska`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'petra':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=petra%20ral`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'ai':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=ai%20ooto`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'momoe':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=momoe%20sawaki`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'neiru':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=neiru%20aonuma`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
				case 'rika':

				reply(mess.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=rika%20kawai`)
				daviduhyy = await getBuffer(dapgz.image)
				david.sendMessage(from, daviduhyy, image, {quoted: freply})
				
				break
//==================================== TOLS MENU =======================================//
                case 'base64encode':

                if (args.length < 1) return reply(`textnya mana?`)
                txt = body.slice(14)
                reply(mess.wait)
				anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/base64/?encode=${txt}`)
				teks = `Hasil : ${anu.result}`
				david.sendMessage(from, teks, text, {quoted: fkontak})
				
				break
				case 'base64decode':

                if (args.length < 1) return reply(`textnya mana?`)
                txt = body.slice(14)
                reply(mess.wait)
				anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/base64/?decode=${txt}`)
				teks = `Hasil : ${anu.result}`
				david.sendMessage(from, teks, text, {quoted: fkontak})
				
				break
				case 'base32hexencode':

                if (args.length < 1) return reply(`textnya mana?`)
                txt = body.slice(17)
                reply(mess.wait)
				anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/base32hex/?encode=${txt}`)
				teks = `Hasil : ${anu.result}`
				david.sendMessage(from, teks, text, {quoted: fkontak})
				
				break
				case 'base32hexdecode':

                if (args.length < 1) return reply(`textnya mana?`)
                txt = body.slice(17)
                reply(mess.wait)
				anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/base32/?decode=${txt}`)
				teks = `Hasil : ${anu.result}`
				david.sendMessage(from, teks, text, {quoted: fkontak})
				
				break
				case 'binaryencode':

                if (args.length < 1) return reply(`textnya mana?`)
                txt = body.slice(14)
                reply(mess.wait)
				anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${txt}`)
				teks = `Hasil : ${anu.result}`
				david.sendMessage(from, teks, text, {quoted: fkontak})
				
				break
				case 'binarydecode':

                if (args.length < 1) return reply(`textnya mana?`)
                txt = body.slice(14)
                reply(mess.wait)
				anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${txt}`)
				teks = `Hasil : ${anu.result}`
				david.sendMessage(from, teks, text, {quoted: fkontak})
				
				break
				case 'octalencode':

                if (args.length < 1) return reply(`textnya mana?`)
                txt = body.slice(13)
                reply(mess.wait)
				anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?encode=${txt}`)
				teks = `Hasil : ${anu.result}`
				david.sendMessage(from, teks, text, {quoted: fkontak})
				
				break
				case 'octaldecode':

                if (args.length < 1) return reply(`textnya mana?`)
                txt = body.slice(13)
                reply(mess.wait)
				anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?decode=${txt}`)
				teks = `Hasil : ${anu.result}`
				david.sendMessage(from, teks, text, {quoted: fkontak})
				
				break
				case 'hexencode':

                if (args.length < 1) return reply(`textnya mana?`)
                txt = body.slice(13)
                reply(mess.wait)
				anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/hex/?encode=${txt}`)
				teks = `Hasil : ${anu.result}`
				david.sendMessage(from, teks, text, {quoted: fkontak})
				
				break
				case 'hexdecode':

                if (args.length < 1) return reply(`textnya mana?`)
                txt = body.slice(13)
                reply(mess.wait)
				anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/hex/?decode=${txt}`)
				teks = `Hasil : ${anu.result}`
				david.sendMessage(from, teks, text, {quoted: fkontak})
				
				break
                case 'shortlink':

                if (args.length < 1) return reply(`linknya mana su?\ncontoh ${prefix}shortlink https://google.com`)
                link = body.slice(11)
                reply(mess.wait)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tinyurl?url=${link}&apikey=${LeysKey}`)
				teks = `SHORTLINK📊\n\nLink : ${link}\nHasil shortlink : ${anu.result}`
				david.sendMessage(from, teks, text, {quoted: fkontak})
				
				break
				case 'shortlink2':

                if (args.length < 1) return reply(`linknya mana su?\ncontoh ${prefix}shortlink https://google.com`)
                link = body.slice(12)
                reply(mess.wait)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuttly?url=${link}&apikey=${LeysKey}`)
				teks = `SHORTLINK📊\n\nLink : ${link}\nHasil shortlink : ${anu.result.hasil}`
				david.sendMessage(from, teks, text, {quoted: fkontak})
				
				break
				case 'shortlink3':

                if (args.length < 1) return reply(`linknya mana su?\ncontoh ${prefix}shortlink https://google.com`)
                link = body.slice(12)
                reply(mess.wait)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/shrturl?url=${link}&apikey=${LeysKey}`)
				teks = `SHORTLINK📊\n\nLink : ${link}\nHasil shortlink : ${anu.result}`
				david.sendMessage(from, teks, text, {quoted: fkontak})
				
				break
//==================================== SERTIFIKAT MENU ==================================//
                case 'tololserti':
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}tololserti ${pushname}`)
				reply(mess.wait)
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://sertifikat-generator.000webhostapp.com/serti1/img.php?nama=${ct}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'fuckboyserti':
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				reply(mess.wait)
				davidpa = args.join(' ')
				dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/fuckboy?apikey=${LolKey}&name=${davidpa}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'fuckgirlserti':
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				reply(mess.wait)
				davidpa = args.join(' ')
				dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/fuckgirl?apikey=${LolKey}&name=${davidpa}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				break
				case 'bucinserti':
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				reply(mess.wait)
				davidpa = args.join(' ')
				dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/bucinserti?apikey=${LolKey}&name=${davidpa}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				break
				case 'pacarserti':

				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}|${namaowner}`)
				reply(mess.wait)
				ct = args.join(' ')
				dap1 = ct.split('|')[0]
				dap2 = ct.split('|')[1]
				dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/pacarserti?apikey=${LolKey}&name1=${dap1}&name2=${dap2}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'goodboyserti':

				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				reply(mess.wait)
				davidpa = args.join(' ')
				dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/goodboy?apikey=${LolKey}&name=${davidpa}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'goodgirlserti':

				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				reply(mess.wait)
				davidpa = args.join(' ')
				dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/goodgirl?apikey=${LolKey}&name=${davidpa}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'badboyserti':

				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				reply(mess.wait)
				davidpa = args.join(' ')
				dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/badboy?apikey=${LolKey}&name=${davidpa}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'badgirlserti':

				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				reply(mess.wait)
				davidpa = args.join(' ')
				dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/badgirl?apikey=${LolKey}&name=${davidpa}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'hekelserti':

				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}hekel ${pushname}`)
				reply(mess.wait)
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/HekerSerti/img.php?nama=${ct}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'fftourserti':

				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}fftourserti ${pushname}`)
				reply(mess.wait)
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'fftourserti2':

				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}fftourserti2 ${pushname}`)
				reply(mess.wait)
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'fftourserti3':

				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}fftourserti3 ${pushname}`)
				reply(mess.wait)
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'fftourserti4':

				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}fftourserti4 ${pushname}`)
				reply(mess.wait)
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'fftourserti5':

				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}fftourserti5 ${pushname}`)
				reply(mess.wait)
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'mltourserti':

				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}mltourserti ${pushname}`)
				reply(mess.wait)
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${ct}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'mltourserti2':

				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}mltourserti2 ${pushname}`)
				reply(mess.wait)
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'mltourserti3':

				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}mltourserti3 ${pushname}`)
				reply(mess.wait)
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'mltourserti4':

				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}mltourserti4 ${pushname}`)
				reply(mess.wait)
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'mltourserti5':

				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}mltourserti5 ${pushname}`)
				reply(mess.wait)
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'pubgtourserti':

				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}pubgtourserti ${pushname}`)
				reply(mess.wait)
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'pubgtourserti2':

				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}pubgtourserti2 ${pushname}`)
				reply(mess.wait)
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'pubgtourserti3':

				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}pubgtourserti3 ${pushname}`)
				reply(mess.wait)
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'pubgtourserti4':

				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}pubgtourserti4 ${pushname}`)
				reply(mess.wait)
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
				case 'pubgtourserti5':

				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}pubgtourserti5 ${pushname}`)
				reply(mess.wait)
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
				david.sendMessage(from, dapuhy, image, {quoted: freply})
				
				break
//==================================== STICKER MENU ====================================//
                    case 'sticker':
                     case 's':
                     case 'stickergif':
                     case 'sgif':
                     case 'stiker':
                    case 'stickerwm':
                    case 'tostiker':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await Vid.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = 'DREAM BOTZ'
                        tod = 'Create By : David'
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${Lolkey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt,
                                "author": tod
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            david.sendMessage(from, ini_buff, sticker, { quoted: mek }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
//==================================== OWNER MENU ====================================//
               case 'self':
			   if (!mek.key.fromMe) return reply('Bukan Owner Lu:v')
			    public = false
			    return reply(  `*「 MODE : SELF 」*`, text)
			    break
			   case 'public':
			    if (!mek.key.fromMe) return reply('OWNER BUKAN?')
			    public = true
			    return reply(`*「 MODE : PUBLIC 」*`, text)
			    break
			    case 'status':
			    const statss = public ? 'PUBLIC': 'SELF'
			    reply(`STATUS : ${statss}`
			    break
			   case 'buggc':
               await david.toggleDisappearingMessages(from)
               reply('Sukses Kak')
               break
                case 'shutdown':
                if (!mek.key.fromMe) return reply('Bukan Owner Lu')
	           await david.sendMessage(from, `_*Bye Aku Pergi Dulu Yh*_`, text,{quoted : freply})
		       await sleep(5000)
               david.close()
		       break
//==================================== COMMAND GROUP ====================================//
               case 'getbio':
               case 'getstatus':
               if (!isGroup) return reply(mess.only.group)
                var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await david.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Status Profile Not Found")
                }
                break
                case 'getprofil':
                case 'getpic':
                if (!isGroup) return reply(mess.only.group)
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await Vid.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					david.sendMessage(from, thumb,image,{quoted : ftroli})
				   }
				   break
               case 'setname':
		        if (!isGroup) return reply('Hanya Bisa Di Gunakan Di Group')
		        if (!isBotGroupAdmins) return reply('Jadikan Bot Admin Untuk Menggunakan Perintah ini')
				if (!isGroupAdmins) return reply('Perintah ini Khusus Admin')
				david.groupUpdateSubject(from, `${body.slice(9)}`)
				david.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: fkontak})
				break
                   case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                    break
                 case 'antilink':
			    if (!mek.key.fromMe) return reply('*Perintah ini Khusus Owner & Admin Group*'
		        if (!isGroup) return reply('Hanya Bisa Digunakan Di grup')					
				if (args.length < 1) return reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				if (Number(args[0]) === 1) {
				if (isAntiLink) return reply(`[❗] Fitur ${command} sudah aktif`)
				antilink.push(from)
				fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
				reply(`[❗] Berhasil mengaktifkan fitur ${command} pada group ini`)
				david.sendMessage(from,`PERINGATAN!! jika bukan admin kirim link wajib menggunakan #izinadmin`, text, {quoted: fkontak})
				} else if (Number(args[0]) === 0) {
				if (!isAntiLink) return reply(`[❗] Fitur ${command} sudah aktif`)
				antilink.splice(from, 1)
				fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
				reply(`[❗] Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else {
				reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				}
				break
				  case 'hidetag':
				    if (!isPremium) return reply("_Perintah ini Khusus Member Premium_")
					if (!isGroup) return reply(mess.only.group)
					var value = body.slice(9)
					var group = await Vid.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: freply
					}
				david.sendMessage(from, options, text,{quoted : freply})
				break
			    case 'demote':
                if (!isGroup) return reply('Hanya Bisa Di Gunakan Di Group')
                if (!isBotGroupAdmins) return reply('Jadikan Bot Admin Untuk Menggunakan Perintah ini')
                if (!isGroupAdmins) return reply('.........')
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di turunkan admin group!')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `Perintah diterima, menurunkan jadi admin group :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                david.groupDemoteAdmin(from, mentioned)
                } else {
                mentions(`Perintah diterima, menurunkan @${mentioned[0].split('@')[0]} jadi admin group`, mentioned, true)
                david.groupDemoteAdmin(from, mentioned)
                }
                break
                case 'promote':
                if (!isGroup) return reply('Hanya Bisa Di Gunakan Di Group')
                if (!isBotGroupAdmins) return reply('Hanya Bisa Di Gunakan Ketika Bpt Jadi Admin')
                if (!isGroupAdmins) return reply('Lu Siapa? Hanya Buat Admin Bodo')
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadikan admin group!')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `Selamat 🥳 Anda naik menjadi admin group 🎉 :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                david.groupMakeAdmin(from, mentioned)
                } else {
                mentions(`Selamat 🥳 @${mentioned[0].split('@')[0]} Anda naik menjadi admin group 🎉`, mentioned, true)
                david.groupMakeAdmin(from, mentioned)
                }
                break
				default:
				  if (budy.includes(`@6285865829368`)) {
                  textImg(`*Ngapain Tag Owner Saya Todz*`)
                  }
                  if (budy.includes(`@6287880120452`)) {
                  textImg(`*Ngapain Tag Owner Saya Todz*`)
                  }
                  if (budy.includes('Assalamualaikum')) {
                  textImg(`*Waalaikumsalam*`)
                  }
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('「Command Eror 」: %s', color(e, 'red'))
		}
	})
}
starts()
/*
.









































Gwa Cuma Gabut Todz
























「 THANKS TO」
• MHANK BARBAR UNTUK BASE NYA
• HARDIANTO
• DAVID XYZ
• DAPPA UHUY
• VEAN XYZ
• DIKA ARDIANTA
• AQULZ
• LOLHUMAN
• LEYSCODERS API
• DAN SEMUA BASE BOT WA
*/
