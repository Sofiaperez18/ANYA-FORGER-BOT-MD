let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de anya forger - Bot*

*➤ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/CG5ZPcJ22fL7QjNRzjguD0

*2.-* https://chat.whatsapp.com/HPansN34Tw1JACTIo9vvXd

*3.-* https://chat.whatsapp.com/Hg4gaweGgDIHm11KvUvfgf

*4.-* https://chat.whatsapp.com/FF55w6s9XfYIogIYrK5WWW
`.trim(), wm, media, [['𝙸𝚁 𝙰𝙻 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
