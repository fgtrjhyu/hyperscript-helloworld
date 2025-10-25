// vite.config.js

import { defineConfig } from 'vite';
import fs from 'fs'; // Node.jsのファイルシステムモジュールをインポート

export default defineConfig({
  server: {
    https: {
      key: './localhost+2-key.pem',
      cert: './localhost+2.pem',
    },
  }
});
