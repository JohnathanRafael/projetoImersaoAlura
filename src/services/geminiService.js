import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function gerarDescricaoComGemini(imageBuffer) {
  const prompt =
    "Gere uma única descrição em português do brasil com até 5000 caracteres para a seguinte imagem: evite usar palavras como : Claro, aqui está uma legenda curta e emocionante para a foto, Aqui está uma legenda curta e emocionante para a foto:, Aqui está uma possível legenda para a imagem:";

  try {
    const image = {
      inlineData: {
        data: imageBuffer.toString("base64"),
        mimeType: "image/png",
      },
    };
    const res = await model.generateContent([prompt, image]);
    return res.response.text() || "Alt-text não disponível.";
  } catch (erro) {
    console.error("Erro ao obter alt-text:", erro.message, erro);
    throw new Error("Erro ao obter o alt-text do Gemini.");
  }
}

export async function gerarAltComGemini(imageBuffer) {
    const prompt =
      "Gere uma única descrição alt com 4 palavras em português do brasil para a seguinte imagem: evite usar palavras como : Claro, aqui está uma legenda curta e emocionante para a foto, Aqui está uma legenda curta e emocionante para a foto:";
  
    try {
      const image = {
        inlineData: {
          data: imageBuffer.toString("base64"),
          mimeType: "image/png",
        },
      };
      const res = await model.generateContent([prompt, image]);
      return res.response.text() || "Alt-text não disponível.";
    } catch (erro) {
      console.error("Erro ao obter alt-text:", erro.message, erro);
      throw new Error("Erro ao obter o alt-text do Gemini.");
    }
  }