const fs = require('fs');

function fixL25() {
    let content = fs.readFileSync('src/data/lessons/l2_5.ts', 'utf8');
    // Add type: "multiple-choice" to objects missing it in quiz array
    // A simple regex might be hard, but let's replace `explanation: "..."` with `explanation: "...", type: "multiple-choice"` if not followed by type
    content = content.replace(/explanation:\s*`([^`]*)`\s*\n\s*\}/g, 'explanation: `$1`,\ntype: "multiple-choice"\n}');
    content = content.replace(/explanation:\s*"([^"]*)"\s*\n\s*\}/g, 'explanation: "$1",\ntype: "multiple-choice"\n}');
    
    fs.writeFileSync('src/data/lessons/l2_5.ts', content, 'utf8');
}

function fixL26() {
    let content = fs.readFileSync('src/data/lessons/l2_6.ts', 'utf8');
    
    // Fix true-false
    content = content.replace(/type:\s*"true-false"/g, 'type: "multiple-choice", options: ["Benar", "Salah"]');
    
    // Fix missing ids in l2_6
    let idCounter = 1;
    content = content.replace(/\{\s*type:\s*"multiple-choice"/g, () => {
        return `{ id: "q2_6_${idCounter++}", type: "multiple-choice"`;
    });
    
    fs.writeFileSync('src/data/lessons/l2_6.ts', content, 'utf8');
}

fixL25();
fixL26();
console.log("Fixed quiz types and ids.");
