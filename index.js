const { WAConnection } = require('@adiwajshing/baileys')

;(async () => {
    const conn = new WAConnection()

    let waitForChats = false
    debugger
    conn.connectOptions.waitForChats = waitForChats

    await conn.connect()

    let n = 0
    setInterval(() => {
      console.log(`${n++} sec. ${Object.keys(conn.contacts).length} contacts`)
    }, 1000)
})()