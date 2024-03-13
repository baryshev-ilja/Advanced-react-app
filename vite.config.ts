import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        svgr({
            exportAsDefault: true,
        }),
        react(),
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: '/src',
            },
        ],
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('frontend'),
    },
    css: {
        modules: {
            localsConvention: (name: string): string => {
                const blockAndElement = /_{2}/g;
                const elementAndModification = /-{2}/g;
                const camelCase = /-(\w)/g;

                return name
                    .replace(blockAndElement, '_')
                    .replace(elementAndModification, '__')
                    .replace(camelCase, (match) => match.charAt(1).toUpperCase());
            },
            generateScopedName: '[path][name]__[local]--[hash:base64:5]',
        },
    },
    server: {
        open: true,
    },
});
