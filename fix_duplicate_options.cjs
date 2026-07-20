const fs = require('fs');
let content = fs.readFileSync('src/data/lessons/l2_6.ts', 'utf8');
content = content.replace(/"options": \["Benar", "Salah"\],\s*/g, '');
fs.writeFileSync('src/data/lessons/l2_6.ts', content, 'utf8');
console.log("Removed duplicate options.");
