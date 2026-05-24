import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                project: 'project.html'
            }
        }
    },
    css: {
        postcss: './postcss.config.js',
    },
})
