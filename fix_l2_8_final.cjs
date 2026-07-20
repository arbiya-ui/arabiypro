const fs = require('fs');
let content = fs.readFileSync('src/data/lessons/l2_8.ts', 'utf8');

// Kita perlu memastikan semua data (grammar, cards, dialog, quiz) ada di dalam properti 'content'
// Struktur yang diinginkan:
// export const l2_8: Lesson = {
//   id: "l2_8",
//   ...,
//   content: {
//     introduction: "...",
//     ...,
//     grammar: { ... },
//     cards: [ ... ],
//     dialog: [ ... ],
//     quiz: [ ... ]
//   }
// };

// Saat ini 'cards' dan 'quiz' mungkin berada di luar 'content' karena kesalahan penutupan kurung kurawal.

// Mari kita rekonstruksi total dengan cara yang lebih aman.
// Kita cari bagian-bagian utama.

const lines = content.split('\n');
let newLines = [];

let inContent = false;
let foundContentStart = false;

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    if (line.includes('content: {')) {
        foundContentStart = true;
        inContent = true;
        newLines.push(line);
        continue;
    }

    // Jika kita menemukan penutup objek lesson (akhir file), pastikan kita menutup content sebelumnya
    if (i === lines.length - 1 && line.trim() === '};') {
        // Cek apakah baris sebelumnya adalah penutup quiz
        if (newLines[newLines.length - 1].trim() === ']') {
             newLines.push('  }'); // Tutup content
        }
        newLines.push(line);
        continue;
    }

    newLines.push(line);
}

// Cara di atas mungkin kurang akurat jika ada penutup kurung yang salah di tengah.
// Mari kita gunakan regex untuk memindahkan properti yang "tercecer" ke dalam content.

let text = newLines.join('\n');

// Cari letak 'cards: [' yang berada di luar 'content: {'
// Kita akan memindahkan kurung penutup 'content' ke akhir file (sebelum };)

// Hapus penutup content yang prematur jika ada.
// Biasanya terjadi setelah grammar { ... }
// Kita cari pattern:
//   },
//   
//   cards: [
// Dan kita hapus '},' tersebut jika itu adalah penutup content.

text = text.replace(/\},\s*\n\s*\n\s*cards: \[/g, ',\n\n    cards: [');
text = text.replace(/dialogues:/g, 'dialog:'); // Pastikan nama properti benar

// Jika quiz juga di luar:
text = text.replace(/\],\s*\n\s*quiz: \[/g, '],\n\n    quiz: [');

// Pastikan di akhir file ada penutup untuk content dan lesson
// Kita hapus penutup-penutup liar di akhir dan tambahkan yang benar.
text = text.trim();
if (text.endsWith(']')) {
    text += '\n  }\n};';
} else if (text.endsWith('}')) {
    // Mungkin sudah ada penutup tapi kurang satu
    if (text.endsWith('}\n};') || text.endsWith('} };')) {
        // do nothing
    } else {
        text += '\n};';
    }
}

fs.writeFileSync('src/data/lessons/l2_8.ts', text);
console.log("Fixed l2_8 structure nesting");
