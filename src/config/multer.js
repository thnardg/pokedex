import multer from "multer";
import crypto from "crypto";
import { resolve, extname } from "path";

const multerConfig = multer.diskStorage({
  destination: resolve(__dirname, "..", "..", "uploads"),
  filename: (request, arquivo, callback) => {
    crypto.randomBytes(16, (erro, valor) => {
      if (erro) {
        return callback(erro);
      }

      return callback(null, valor.toString("hex") + extname(arquivo.originalname));
    });
  },
});

export default multerConfig;
