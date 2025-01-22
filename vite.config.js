import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    root: path.resolve(__dirname, 'src'), // Define 'src' como raíz
    publicDir: path.resolve(__dirname, 'public'), // Carpeta para recursos estáticos
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'), // Alias para importaciones
        },
    },
    build: {
        outDir: path.resolve(__dirname, 'dist'), // Generar la salida en 'dist' (en la raíz)
        emptyOutDir: true, // Limpia la carpeta 'dist' antes de construir
    },
});
