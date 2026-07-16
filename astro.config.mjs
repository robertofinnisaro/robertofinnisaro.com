import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://robertofinnisaro.com',
  output: 'static',
  markdown: {
    shikiConfig: { theme: 'github-dark' }
  }
});
