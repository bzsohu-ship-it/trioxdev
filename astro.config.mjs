import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Git worktree alatt a helyi node_modules üres, a csomagok a fő checkout
// node_modules mappájából oldódnak fel. Az a mappa a Vite alapértelmezett
// fs.allow listáján kívül esik, ezért a @fontsource webfontok 403-at kapnak a
// dev szerveren. A tényleges csomaggyökeret oldjuk fel, hogy ne kerüljön
// gépfüggő elérési út a konfigba. A fő checkoutban ez a meglévő viselkedés.
const require = createRequire(import.meta.url);
const projektGyoker = path.dirname(fileURLToPath(import.meta.url));
const csomagGyoker = path.resolve(path.dirname(require.resolve('astro/package.json')), '..');

export default defineConfig({
  site: 'https://triox.hu',
  // A köszönőoldal konverziót számol, ezért nem kerülhet a keresőbe: onnan
  // érkező látogató hamis ajánlatkérésnek látszana. A noindex meta a lapon van.
  integrations: [sitemap({ filter: (oldal) => !oldal.includes('/kapcsolat/koszonjuk/') })],
  build: { format: 'directory' },
  // A .claude/launch.json `autoPort` beállítása PORT környezeti változóban adja
  // át a ténylegesen kiosztott portot. E nélkül az Astro magától lépne tovább a
  // következő szabad portra, és a megnyitott előnézeti fül rossz címre mutatna.
  server: { port: Number(process.env.PORT) || 4321 },
  vite: {
    server: { fs: { allow: [projektGyoker, csomagGyoker] } },
  },
});
