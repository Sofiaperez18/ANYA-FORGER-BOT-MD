const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
let name = await conn.getName(m.sender)
let str = `
ãđ đ§đđđē đđ đēđđđ ${name} đĨ°åŊĄ

ã¤ã¤ đŗī¸<đĸđ đŠđ  đĨđ´đ¤đąđŗđ¤/>đ

- đ°đđđ¸ đŋđđ´đŗđ´ đļđđ°đđŗđ°đ đŧđ´đŊđđ°đšđ´đ đđđ´ đđđ¸đ´đđ°đ đđ´đ đŧđ°đ đđ°đđŗđ´

<đ đĻđąđ¤đĻđ đą đ  đĢđ  đĢđ¨đ˛đŗđ />

Â° āļŦâđŗī¸ _${usedPrefix}agregarmsg <texto/comando/palabra clave> (responde a un texto)_
Â° āļŦâđŗī¸ _${usedPrefix}agregarvn <texto/comando/palabra clave> (responde a una nota de voz)_
Â° āļŦâđŗī¸ _${usedPrefix}agregarvideo <texto/comando/palabra clave> (responde a un video)_
Â° āļŦâđŗī¸ _${usedPrefix}agregaraudio <texto/comando/palabra clave> (responde a un audio)_
Â° āļŦâđŗī¸ _${usedPrefix}agregarimg <texto/comando/palabra clave> (responde a una imagen)_
Â° āļŦâđŗī¸ _${usedPrefix}agregarsticker <texto/comando/palabra clave> (responde a un sticker)_

<đĢđ¨đ˛đŗđ  đŖđ¤ đĸđŽđŦđ đ­đŖđŽđ˛/>

Â° āļŦâđŗī¸ _${usedPrefix}listamsg_
Â° āļŦâđŗī¸ _${usedPrefix}listavn_
Â° āļŦâđŗī¸ _${usedPrefix}listavideo_
Â° āļŦâđŗī¸ _${usedPrefix}listaaudio_
Â° āļŦâđŗī¸ _${usedPrefix}listaimg_
Â° āļŦâđŗī¸ _${usedPrefix}listasticker_

<đĩđ¤đą đŗđ¤đˇđŗđŽđ˛ đŽ đ đąđĸđ§đ¨đĩđŽđ˛/>

Â° āļŦâđŗī¸ _${usedPrefix}vermsg <texto/comando/palabra clave>_
Â° āļŦâđŗī¸ _${usedPrefix}vervn <texto/comando/palabra clave>_
Â° āļŦâđŗī¸ _${usedPrefix}vervideo <texto/comando/palabra clave>_
Â° āļŦâđŗī¸ _${usedPrefix}veraudio <texto/comando/palabra clave>_
Â° āļŦâđŗī¸ _${usedPrefix}verimg <texto/comando/palabra clave>_
Â° āļŦâđŗī¸ _${usedPrefix}versticker <texto/comando/palabra clave>_

<đ¤đĢđ¨đŦđ¨đ­đ đą/>

Â° āļŦâđŗī¸ _${usedPrefix}eliminarmsg <texto/comando/palabra clave>
_
Â° āļŦâđŗī¸ _${usedPrefix}eliminarvn <texto/comando/palabra clave>
_
Â° āļŦâđŗī¸ _${usedPrefix}eliminarvideo <texto/comando/palabra clave>_
Â° āļŦâđŗī¸ _${usedPrefix}eliminaraudio <texto/comando/palabra clave>_
Â° āļŦâđŗī¸ _${usedPrefix}eliminarimg <texto/comando/palabra clave>
_
Â° āļŦâđŗī¸ _${usedPrefix}eliminarsticker <texto/comando/palabra clave>_`.trim()

conn.sendHydrated(m.chat, str, wm, pp, '', 'đļđ¸đđˇđđą', null, null, [
['âđŦđ¤đ­đ´ đ¯đąđ¨đ­đĸđ¨đ¯đ đĢâ', '/menu']
], m)
}}
handler.help = ['cajafuerte']
handler.tags = ['owner']
handler.command = /^(cajafuerte)$/i
handler.rowner = true
handler.fail = null
export default handler