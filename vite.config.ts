import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 39096,
        open: false,
        cors: {
            "origin": "*",
            "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        }
    },
    resolve: {
        alias: [
            {find: '@', replacement: resolve(__dirname, 'src')},
            {find: 'comps', replacement: resolve(__dirname, 'src/components')},
            {find: 'pages', replacement: resolve(__dirname, 'src/pages')},
            {find: 'layouts', replacement: resolve(__dirname, 'src/layouts')},
            {find: 'utils', replacement: resolve(__dirname, 'src/utils')},
            {find: 'assets', replacement: resolve(__dirname, 'src/assets')},
            {find: '#', replacement: resolve(__dirname, 'public')},
            {find: 'types', replacement: resolve(__dirname, 'src/types')},
            {find: 'styles', replacement: resolve(__dirname, 'src/styles')},
        ],
    }
})
