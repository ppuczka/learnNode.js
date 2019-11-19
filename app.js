const http = require('http');



const server = http.createServer((req, res) => {
    console.log(req.headers, req.method, req.url);
    res.setHeader('Content-Type', 'text/html')
    res.write(`Hello`)
    res.end;    
// process.exit();

});

server.listen(3000); 