import { defineConfig } from 'vite';

import { resolve } from 'path';

import react from '@vitejs/plugin-react';

export default defineConfig({
   plugins: [react()],
   /**
    * defining aliases
    */
   resolve: {
      alias: {
         '~src': resolve(__dirname, 'src'),
         '~components': resolve(__dirname, 'src', 'components'),
         '~assets': resolve(__dirname, 'assets'),
         '~helpers': resolve(__dirname, 'src', 'helpers'),
      },
   },
   server: {
      host: 'localhost',
      port: 3000,
      proxy: {
         '/api/': {
            target: 'http://podium-backend.sakku-pardis.ir:8091',
            changeOrigin: true,
         },
      },
   },
});
