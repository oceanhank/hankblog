// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://oceanhank.github.io',
  base: '/hankblog',
  integrations: [sitemap()],
});
