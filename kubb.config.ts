import { defineConfig } from "@kubb/core"
import swagger from "@kubb/swagger"
import swaggerClient from "@kubb/swagger-client"

export default defineConfig({
  root: ".",
  input: {
    path: "https://brito-rossi-api.onrender.com/docs/json",
  },
  output: {
    path: "./src/api",    // raiz da geração
    clean: true,
  },
  plugins: [
    swagger({ output: false }),
    swaggerClient({
      output: {
        path: "./clients",  // *somente* a sub‑pasta relativa à raiz
      },
    }),
  ],
})
