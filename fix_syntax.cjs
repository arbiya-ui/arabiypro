const fs = require('fs');
['src/data/lessons/l2_5.ts', 'src/data/lessons/l2_6.ts'].forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/,\}/g, '},'); // replace ,} with },
    fs.writeFileSync(file, content, 'utf8');
});
console.log("Fixed syntax.");
