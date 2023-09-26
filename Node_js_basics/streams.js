const fs = require('fs');

const readStream = fs.createReadStream('./doc/doc_streaming.txt', {encoding:'utf-8'});
const writeStream = fs.createWriteStream('./doc/doc_writeStream.txt');

readStream.on('data', (chunk) =>
{
    console.log('A new chunk got received...--------------->');
    console.log(chunk);
    // writeStream.write('\nNew Chunk');
    // writeStream.write(chunk);
})

// Second method is using: piping

readStream.pipe(writeStream);