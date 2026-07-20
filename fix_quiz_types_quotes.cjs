const fs = require('fs');

function fixL25() {
    let content = fs.readFileSync('src/data/lessons/l2_5.ts', 'utf8');
    // For l2_5, maybe the type is missing entirely.
    // Let's add "type": "multiple-choice" before "question" if it's missing type.
    // Let's just find { followed by "id" and add "type" if not present
    content = content.replace(/\{\s*"id":\s*"q[^"]*",\s*"question"/g, (match) => {
        return match.replace('"question"', '"type": "multiple-choice",\n        "question"');
    });
    fs.writeFileSync('src/data/lessons/l2_5.ts', content, 'utf8');
}

function fixL26() {
    let content = fs.readFileSync('src/data/lessons/l2_6.ts', 'utf8');
    let idCounter = 1;
    // Replace { "type": "multiple-choice" with { "id": "q2_6_X", "type": "multiple-choice"
    content = content.replace(/\{\s*"type":\s*"multiple-choice"/g, () => {
        return `{\n        "id": "q2_6_g${idCounter++}",\n        "type": "multiple-choice"`;
    });
    
    // Fix true-false in l2_6
    content = content.replace(/"type":\s*"true-false"/g, '"type": "multiple-choice",\n        "options": ["Benar", "Salah"]');
    
    fs.writeFileSync('src/data/lessons/l2_6.ts', content, 'utf8');
}

fixL25();
fixL26();
console.log("Fixed quiz types quotes.");
