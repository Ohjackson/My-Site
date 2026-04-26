import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('/src/pages/main/sections/projects/data/')) {
                        return 'project-data';
                    }
                    if (id.includes('node_modules')) {
                        if (id.includes('@mui') || id.includes('@emotion')) {
                            return 'mui';
                        }
                        if (id.includes('react-i18next') || id.includes('i18next')) {
                            return 'i18n';
                        }
                        if (id.includes('@tanstack/react-query')) {
                            return 'query';
                        }
                        if (id.includes('lucide-react')) {
                            return 'icons';
                        }
                        return 'vendor';
                    }
                }
            }
        }
    }
});
