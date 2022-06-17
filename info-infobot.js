import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
┬┴┬┴┤ 𝖨𝖭𝖥𝖮 𝖡𝖮𝖳 ├┬┴┬┴
┬┴
┬┴┬┴┤[👸] 𝙲𝚁𝙴𝙰𝙳𝙾𝚁: 𝖲𝖮𝖥𝖨𝖠
┬┴┬┴┤[#] 𝙽𝙾° 𝙳𝙴𝙻 𝙲𝚁𝙴𝙰𝙳𝙾𝚁: wa.me/50495086382
┬┴┬┴┤[🎳] 𝙿𝚁𝙴𝙵𝙸𝙹𝙾: ${usedPrefix}
┬┴┬┴┤[🔐] 𝙲𝙷𝙰𝚃𝚂 𝙿𝚁𝙸𝚅𝙰𝙳𝙾𝚂: ${chats.length - groups.length}
┬┴┬┴┤[👥] 𝙲𝙷𝙰𝚃𝚂 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂: ${groups.length}
┬┴┬┴┤[▶️] 𝙲𝙷𝙰𝚃𝚂 𝚃𝙾𝚃𝙰𝙻𝙴𝚂: ${chats.length} 
┬┴┬┴┤[✅] 𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳: ${uptime}
┬┴┬┴┤[👤] 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${totalreg} 𝚗𝚞𝚖𝚎𝚛𝚘𝚜
┬┴┬┴┤[⚡‍] 𝚅𝙴𝙻𝙾𝙲𝙸𝙳𝙰𝙳: 
┬┴┬┴┤${speed} 
┬┴┬┴┤𝚖𝚒𝚕𝚒𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜
┬┴┬┴┤[✅️] 𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳: ${autoread ? '✅𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘✅' : '❌𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘❌'}
┬┴┬┴┤[⚠️] 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃: ${restrict ? '✅𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘✅' : '❌𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘❌'} 
┬┴
┬┴┬┴┤𝖠𝘕𝘠𝘈 𝘍𝘖𝘙𝘎𝘌𝘙-𝘉𝘖𝘛├┬┴┬┴
`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃',
body: 'anya forger-bot',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: ``}}})
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|infobot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
