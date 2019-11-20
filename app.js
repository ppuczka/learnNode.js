const http = require('http');
const fs = require('fs')



const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write(`<head><title>Enter Message</title></head>`);
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>')
        return res.end();    
    } 
    if (url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (data) => {
            console.info(data);
            body.push(data);
        });

        req.on('end', () => {
            const bufferedBody = Buffer.concat(body).toString();
            console.info(bufferedBody)
            fs.writeFileSync('message.md', bufferedBody);
            res.writeHead(302, 'Location', '/');
            return res.end();
        } );
        
        

    }
    
// process.exit();

});

server.listen(3000); 
