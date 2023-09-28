const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>
{
    console.log(req.url);
    res.setHeader('Content-Type', 'text-plain');
    // res.write("<p>Hello world!!</p>");

    let path = './views';
    switch(req.url)
    {
        case '/':
            path+= '/index.html';
            break;
        case '/about.html':
            path+= '/about.html';
            break;
        default:
            path+= '/404.html';
            break;
    }

    // send an html file
    fs.readFile(path, (err, data) =>
    {
        if (err)
        {
            console.log(err);
            console.log(path);
            res.end();
        }
        else
        {
            res.write(data);
            res.end();
        }
    })

});

server.listen(3000, 'localhost', () =>
{
    console.log('Listening for request for port 3000');
});