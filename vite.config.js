import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        foto: resolve(__dirname, 'src/piczz.html'),
        video: resolve(__dirname, 'src/video.html'),
        misto: resolve(__dirname, 'src/mis.html'),
      },
    },
  },
});
