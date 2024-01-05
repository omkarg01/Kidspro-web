import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  root: './src',
  build: {
    chunkSizeWarningLimit: 1000,
    outDir: 'dist',
    rollupOptions: {
      input: {
        // Specify the entry points for your JS files
        main: './src/index.html', // Adjust the path based on your project structure
        // Add other entry points if needed
        
      },
    },
  },
  css: {
    preprocessorOptions: {
      // If you're using a preprocessor like Sass, you can specify options here
      // For example, for Sass, you might use node-sass as the implementation:
      // sass: {
      //   implementation: require('node-sass'),
      // },
    },
    // Specify the entry point for your main CSS file in the CSS folder
    // You can include other CSS files from this entry point
    postcss: {
      postcss: './src/css/style-main.css',
    },
  },

  publicDir: 'src',
  // rollupOptions: {
  //   external: [],
  // },
  // build: {

  // },
})
