
const fs = require('fs')
const chalk = require('chalk')

// Other
packname = 'HAVEST BOT\n\nINSTA: @havest_f'
author = '\n'
sessionName = 'bot'
prefa = ['','!'/'.','🐦','🐤','🗿']
sp = '⭔'
mess = {
    admin: '*Você precisa ser um adm para poder usar esse comando*',
    botAdmin: '*_Opa, Preciso ser um administrador do grupo para poder finalizar este comando_*',
    owner: 'Só meu dono',
    group: '*_Esse comando só pode ser usado em grupos_*',
    private: '*_Só pode ser usado no pv_*',
    bot: 'Só o bot',
    wait: '*_Espere..._*',
}
thumb = fs.readFileSync('./lib/haves.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
