import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'

export default defineConfig({
  site: 'https://joblens.hyperoot.dev',
  prefetch: true,
  compressHTML: true,

  integrations: [
    icon({
      iconDir: 'src/assets/icons',
      svgoOptions: {
        plugins: [
          {
            name: 'convertColors',
            params: {
              currentColor: true,
            },
          },
        ],
      },
    }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
})
