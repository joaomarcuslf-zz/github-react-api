const http = require('http');
const fs = require('fs-extra');
const path = require('path');
const PORT = process.env.PORT || 3000;
const open = require('open');

http.createServer((request, response) => {
    let filePath = '.' + request.url;
    if (filePath === './')
        filePath = './index.html';

    let extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.wav':
            contentType = 'audio/wav';
            break;
    }

    fs.readFile(filePath, function(error, content) {
        if (error) {
          let timestamp = Date.now();
          response.writeHead(404);

          error.statusCode = response.statusCode;
          error.statusMessage = response.statusMessage;

          console.log(response)


          let errorMessage =
          `Error: ${error.statusMessage}\nStatus: ${error.statusCode}\nPath: ${error.path}`;

          console.error(errorMessage);
          response.end(errorMessage);

          fs.writeJson(`./logs/error-${timestamp}.json`, error, () => fs.mkdirpSync('./logs'));
        }
        else {
            response.setHeader('Access-Control-Allow-Origin', '*');
            response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            response.setHeader('Access-Control-Allow-Credentials', true);
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(PORT);

let appUrl = 'http://localhost:' + PORT;
console.log('Server running on', appUrl);
//open(appUrl);
