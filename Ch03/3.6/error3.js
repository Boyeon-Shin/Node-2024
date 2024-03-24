import fs from 'fs/promises';

setInterval(() => {
    fs.unlink('./abcd.js').catch(console.error);
}, 1000);