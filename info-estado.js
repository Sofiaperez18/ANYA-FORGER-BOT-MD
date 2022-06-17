let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './Menu2.jpg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado =`
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
乡❤️ 𝙃𝙊𝙇𝘼 𝙈𝙄 𝘼𝙈𝙊𝙍 ❤乡

𐎽░𝘈𝘕𝘠𝘈 𝘍𝘖𝘙𝘎𝘌𝘙-𝘉𝘖𝘛░
𐎽𝙀𝙎𝙏𝙊𝙔 𝘼 𝙎𝙐𝙎 𝙊𝙍𝘿𝙀𝙉𝙀𝙎 𝘼𝙈𝙊𝙍😍
𐎽𝘼𝘾𝙏𝙄𝙑𝙊 𝘿𝙐𝙍𝘼𝙉𝙏𝙀
𐎽1:15:12
𐎽𝘽𝙊𝙏 𝘿𝙀 𝙐𝙎𝙊 𝙋𝙐𝘽𝙇𝙄𝘾𝙊✿

▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
`.trim()

conn.sendHydrated(m.chat, estado, wm, picture, '', '𝖦𝖨𝖳𝖧𝖴𝖡', null, null, [
['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']
], m)}

handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|stado|stats)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
