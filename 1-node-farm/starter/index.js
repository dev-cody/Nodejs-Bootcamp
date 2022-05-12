const fs = require('fs')
const http = require('http')
//******************************** */
//File Readt
//Blocking, synchornous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(textIn)
// const textOut = `This is what we know about the avocado: ${textIn}`
// fs.writeFileSync('./txt/output.txt', textOut)
// console.log('file written')

//Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2)
//     })
// })
// console.log('Will read this file')


//Server
const server = http.createServer((req, res) => {
    res.end('Hello from the server')
})

server.listen(3001, '127.0.0.1', () => {
    console.log(`Listening on port 3001`)
})