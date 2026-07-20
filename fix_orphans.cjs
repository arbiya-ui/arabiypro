const fs = require('fs');
const files = ['src/data/lessons/l1_1.ts', 'src/data/lessons/l1_3.ts', 'src/data/lessons/l1_4.ts', 'src/data/lessons/l1_5.ts'];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  let lines = content.split('\n');
  let newLines = [];
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    // If line is just a string and the previous line was NOT a key line that expects a multiline value
    if (line.trim().startsWith('"') && line.trim().endsWith('",') && !line.includes(':')) {
      let prev = newLines[newLines.length - 1] || '';
      if (prev.includes(':') && (prev.trim().endsWith(':') || prev.trim().endsWith('['))) {
        // This is a multiline value or array, keep it
        newLines.push(line);
      } else {
        // This is likely an orphan string from deleted trans:
        console.log(`Deleting orphan string in ${file}: ${line.trim()}`);
      }
    } else {
      newLines.push(line);
    }
  }
  fs.writeFileSync(file, newLines.join('\n'));
});
