import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env variables.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    // You can use the env variables here
    define: {
      'process.env': env
    }
  }
})
