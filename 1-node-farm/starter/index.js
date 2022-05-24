const fs = require('fs')
const http = require('http')
const url = require('url')


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

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data)

const server = http.createServer((req, res) => {
    const pathName = req.url

    if(pathName === '/' || pathName === '/overview') {
        res.end('this is the overview')
    } else if(pathName === '/product') {
        res.end('this is the product')
    } else if( pathName === '/api') {
        res.writeHead(200, {'Content-type': 'application/json'})
        res.end(data)
    } else {
        res.writeHead(404, {
            'content-type': 'text/html',
            'my-own-header': 'Hello there'
        })
        res.end('<h1>this page could not be found</h1>')
    }
})

server.listen(3001, '127.0.0.1', () => {
    console.log(`Listening on port 3001`)
})