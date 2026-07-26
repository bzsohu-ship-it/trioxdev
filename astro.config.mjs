import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://triox.hu',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
