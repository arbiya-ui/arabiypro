const fs = require('fs');
['src/data/lessons/l2_5.ts', 'src/data/lessons/l2_6.ts'].forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/\]\s*\}\s*\}\s*\};\s*$/, '    ]\n  }\n};\n');
    fs.writeFileSync(file, content, 'utf8');
});
console.log("Fixed end.");
