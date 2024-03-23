import fs from 'fs/promises';
// import { readFile } from 'fs/promises'

fs.readFile('./readme.txt')
    .then((data) => {
        console.log(data);
        console.log(data.toString());
    })
    .catch((err) => {
        console.error(err);
    });
