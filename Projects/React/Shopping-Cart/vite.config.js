import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: '/WebDev/Shopping-Cart/',
    plugins: [react()],
    test: {
        environment: 'jsdom',
        setupFiles: './src/test-setup.jsx',
    }
})
