const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;

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
          response.writeHead(404);
          response.end(`Error: ${error.code}`);
          console.error('Error on request!');
          console.error('Status: 400');
          console.error(`Code: ${error.code}`);
          console.error(`Path: ${error.path}`);
          console.error(`Error: ${error.stack}`);
          response.end();
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
console.log('Server running on http://localhost:' + PORT);
