import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs";
import path from "path";
import { Buffer } from "buffer";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react(), tailwindcss()],
    server: {
      https: (() => {
        try {
          // Option 1: Read from environment variables (base64 encoded)
          const sslCert = env.SSL_CERT;
          const sslKey = env.SSL_KEY;

        if (sslCert && sslKey) {
          return {
            key: Buffer.from(sslKey, "base64").toString(),
            cert: Buffer.from(sslCert, "base64").toString(),
          };
        }

        // Option 2: Fallback to local files
        const keyPath = path.resolve("./private.key.pem");
        const certPath = path.resolve("./domain.cert.pem");

        if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
          return {
            key: fs.readFileSync(keyPath),
            cert: fs.readFileSync(certPath),
          };
        }
      } catch (error) {
        console.warn(
          "SSL certificates not found, using self-signed certificates",
          error
        );
      }

        // Fallback to self-signed certificates
        return true;
      })(),
    },
  };
});
