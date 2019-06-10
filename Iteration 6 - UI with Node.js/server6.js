/*
Building a Node.js static file server (files over HTTP) using ES6+
https://adrianmejia.com/blog/2016/08/24/building-a-node-js-static-file-server-files-over-http-using-es6/

MIME Types List
https://www.freeformatter.com/mime-types-list.html
*/

// can handle image file request as well

const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')

// maps file extention to MIME types
const mimeType = {
  '.ico': 'image/x-icon',
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.doc': 'application/msword',
  '.eot': 'appliaction/vnd.ms-fontobject',
  '.ttf': 'aplication/font-sfnt'
}

// Create a server
http.createServer(function (request, response) {
  // Parse the request containing file name
  let pathname = url.parse(request.url).pathname
  // Get the extension of the required file
  const ext = path.parse(pathname).ext

  // Print the name of the file for which request is made.
  console.log("Request for " + pathname + " received.")

  // Read the requested file content from file system
  var fileName = pathname.substr(1)
  fs.readFile(fileName, function (err, data) {
    if (err) {
      console.log(err)
      // HTTP Status: 404 : NOT FOUND
      // Content Type: text/plain
      response.writeHead(404, {
        'Content-Type': 'text/html'
      })
      response.end(`File ${pathname} not found!`)
      return
    }

    // Corresponding file found
    // HTTP Status: 200 : OK
    response.writeHead(200, {
      'Content-Type': mimeType[ext]
    })

    // Write the content of the file to response body
    response.write(data)

    // Send the response body
    response.end()
  })
}).listen(8081)

// Console will print the message
console.log('Server running at localhost:8081/')
