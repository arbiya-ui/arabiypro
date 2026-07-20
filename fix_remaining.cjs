const fs = require('fs');

function fixL25() {
    let content = fs.readFileSync('src/data/lessons/l2_5.ts', 'utf8');
    if (!content.includes('isCompleted: false')) {
        content = content.replace('type: "conversation",', 'isCompleted: false,\n  isLocked: false,\n  type: "conversation",');
    }
    fs.writeFileSync('src/data/lessons/l2_5.ts', content, 'utf8');
}

function fixL26() {
    let content = fs.readFileSync('src/data/lessons/l2_6.ts', 'utf8');
    let idCounter = 100;
    // Fix true-false that became multiple-choice but have missing id
    // We can just find { "type": "multiple-choice" that does NOT have an id
    // Actually simpler: just find {\n        "type": "multiple-choice",\n        "options": ["Benar", "Salah"]
    content = content.replace(/\{\s*"type": "multiple-choice",\s*"options": \["Benar", "Salah"\]/g, () => {
        return `{\n        "id": "q2_6_tf${idCounter++}",\n        "type": "multiple-choice",\n        "options": ["Benar", "Salah"]`;
    });
    fs.writeFileSync('src/data/lessons/l2_6.ts', content, 'utf8');
}

fixL25();
fixL26();
console.log("Fixed remaining.");
