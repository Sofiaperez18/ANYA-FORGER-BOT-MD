import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of groups) { 
conn.sendButton(id, `āāāā° šššššššššš ā±āāā\nā\nā ā§ ${text}\nā\nāāāāāāāāāāāāāāāā`, 'šššš šš šš š¾šššššš¾š¼šæš šššš¾šš¼š\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['š¾ š¾šš½š“š š¾', '.owner'],['š š³š¾š½š°š š', '.donasi']], false, { 
contextInfo: { externalAdReply: {
title: 'į“į“į“į“É“ÉŖį“į“į“į“ į“ŅÉŖį“ÉŖį“Ź į“ É¢Źį“į“į“s',
body: 'anya forger-Bot', 
sourceUrl: ``, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`[āššššā] š¼š“š½šš°š¹š“ š“š½ššøš°š³š¾ š° ${groups.length} š¶šššæš¾/š\n\nšššš: š“š šæš¾ššøš±š»š“ ššš“ šš“š½š¶š° šµš°š»š»š¾š š“ššš“ š²š¾š¼š°š½š³š¾ š š½š¾ šš“ š“š½ššøš“ š° šš¾š³š¾š š»š¾š š²š·š°šš, š³šøšš²šš»šæš“ šæš¾š š“š» š¼š¾š¼š“š½šš¾`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.rowner = true
export default handler
