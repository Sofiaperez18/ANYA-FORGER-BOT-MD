import fs from 'fs'
let handler = async (m, { conn }) => {
conn.reply(m.chat, ``, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ππ²ππΈπΏπ ππ·π°πππ°πΏπΏ π±πΎπ πΌπ³',
body: 'anya forger -Bot -MD',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: ``}}})
}
handler.command = ['sc','script']
handler.help = ['sc']
handler.tags = ['General']
export default handler
