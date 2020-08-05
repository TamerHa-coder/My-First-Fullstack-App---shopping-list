const http = require('http');
const { readFileSync } = require('fs');

let server = http.createServer(function(request, response){
    let file = readFileSync('./home.html', 'utf8');
    response.write(file);
    response.end();
});

server.listen(3000);