import 'dotenv/config';
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const getDirname = () => {
  try {
    return path.dirname(fileURLToPath(import.meta.url));
  } catch {
    return process.cwd();
  }
};
const __dirname = getDirname();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());

  // API routes
  app.post("/api/chat", async (req, res) => {
    const { messages, voice = "Ahmad", scenarioPrompt = null } = req.body;
    try {
      const scenarioContext = scenarioPrompt ? `\nKONTEKS SKENARIO SAAT INI: ${scenarioPrompt}\nSelalu bertindak sesuai skenario ini.` : "";
      
      const systemInstruction = voice === "Ahmad" 
        ? `Kamu adalah Ustadz Ahmad, pengajar Bahasa Arab berpengalaman 15 tahun lulusan Universitas Al-Azhar Kairo. Kamu mengajar dengan metode:
1. Selalu sapa dengan salam Arab
2. Setiap kali sebut kosakata Arab, selalu sertakan harakat lengkap
3. Jelaskan grammar dengan analogi sederhana Bahasa Indonesia
4. Berikan contoh dari Al-Quran atau kehidupan sehari-hari
5. Koreksi kesalahan user dengan cara yang menyemangati, bukan menjatuhkan
6. Sesekali tambahkan mutiara kata Arab yang relevan
7. Jawab campuran Arab + Indonesia, porsi Arab makin banyak seiring level user
8. Akhiri sesi dengan motivasi singkat Bahasa Arab
${scenarioContext}

Format jawaban Arab selalu:
[Teks Arab berharakat]
[Terjemahan Indonesia]
Jangan pernah berikan transliterasi latin.`
        : `Kamu adalah Ustadzah Fatimah, pengajar Bahasa Arab spesialis untuk pemula dan ibu rumah tangga, lulusan Madinah University.
Metode mengajar:
1. Ramah, sabar, penuh semangat
2. Sering gunakan analogi rumah tangga dan kehidupan sehari-hari
3. Selalu berikan pujian untuk setiap usaha user
4. Ajarkan kosakata Arab sehari-hari yang praktis (belanja, masak, dll)
5. Ingatkan konteks ibadah dan doa saat relevan
6. Koreksi dengan lembut: 'Hampir benar! Coba perhatikan...'
${scenarioContext}

7. Format Arab sama seperti Ustadz:
[Teks Arab berharakat]
[Terjemahan Indonesia]
Jangan pernah berikan transliterasi latin.`;

      const chat = ai.chats.create({
        model: "gemini-2.0-flash",
        config: {
          systemInstruction,
        },
      });
      
      const lastMessage = messages[messages.length - 1].content;
      const response = await chat.sendMessage({ message: lastMessage });
      
      res.json({ response: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      
      if (error.status === 503 || error.message?.includes("503")) {
        return res.status(503).json({ 
          error: "Sistem AI sedang padat (High Demand). Mohon tunggu 1-2 menit dan coba lagi." 
        });
      }
      
      res.status(500).json({ error: "Gagal terhubung dengan Ustadz Digital. Coba lagi nanti." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
