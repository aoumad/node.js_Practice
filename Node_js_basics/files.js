const fs = require('fs');

// reading files
// fs.readFile('./doc/doc1.txt', (err, data) =>
// {
//     if (err)
//         console.log(err);
//     else
//         console.log(data.toString());
// })

// // writing files
// fs.writeFile('./doc/doc1.txt' ,'Hello I am again a person who wanna learn about node js', () =>
// {
//     console.log('Thanks mate!!');
// })

// // directories
// if (!fs.existsSync('./assets'))
// {
//     fs.mkdir('./assets', (err) =>
//     {
//         if (err)
//             console.log(err);
//     })
// }
// else
// {
//     fs.rmdir('./assets', (err) =>
//     {
//         if (err)
//            console.log(err);
//         else
//             console.log('Directory removed');
//         })
// }


// deleting files
if (fs.existsSync('./doc/deleteme.txt'))
{
    fs.unlink('./doc/deleteme.txt', (err) =>
    {
        if (err)
            console.log(err);
        else
            console.log('File is deleted');
    })
}