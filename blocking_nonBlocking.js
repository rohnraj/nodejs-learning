const fs = require('fs');

console.log('Start of the program');
// Blocking code
const data = fs.readFileSync('newFile.txt', 'utf8');
console.log('Blocking code:', data);

console.log("End of the program");

// -------------------------------------------------

console.log('Start of the program (non-blocking)');
// Non-blocking code
fs.readFile('newFile.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Non-blocking code:', data);
});

console.log("End of the program (non-blocking)");