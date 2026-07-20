const fs = require('fs');

function fixFile(file) {
    let content = fs.readFileSync(file, 'utf8');
    // Check if cards is outside content
    if (content.includes('},\n    cards: [')) {
        content = content.replace('},\n    cards: [', ',\n    cards: [');
        content = content.replace(/};\s*$/, '    }\n};\n');
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed ${file} by moving cards/quiz into content.`);
    }
}

fixFile('src/data/lessons/l2_5.ts');
fixFile('src/data/lessons/l2_6.ts');
