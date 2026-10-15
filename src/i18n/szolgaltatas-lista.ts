/**
 * A szolgáltatáslisták sorai — a kezdőlap „Amit átveszünk Öntől" és a
 * /szolgaltatasok/ listája (és angol párjaik) innen olvasnak.
 *
 * A hat fő szolgáltatás a tartalomgyűjteményből jön (sorrend szerint), utánuk
 * a KIEGESZITO tömb sorai: ezek önálló oldalak, nem gyűjteménybeli
 * szolgáltatások (pl. a SOX-oldal). Új ilyen oldalt ide kell felvenni, mindkét
 * nyelven.
 */
import { getCollection } from 'astro:content';
import type { Nyelv } from './utak';

export interface SzolgaltatasSor {
  href: string;
  cim: string;
  osszefoglalo: string;
  cimke?: string;
}

const KIEGESZITO: Record<Nyelv, SzolgaltatasSor[]> = {
  hu: [
    {
      href: '/sox-megfeleles/',
      cim: 'SOX hatálya alá tartozó IT-üzemeltetés',
      osszefoglalo:
        'Amerikai tőzsdén jegyzett vállalatok magyarországi leányvállalatainak: jogosultság- és változáskezelés, mentés és visszaállítás, bizonyítékok a külső auditor ITGC-vizsgálatához.',
      cimke: 'SOX · ITGC',
    },
  ],
  en: [
    {
      href: '/en/sox-compliance/',
      cim: 'IT operations under SOX',
      osszefoglalo:
        'For Hungarian subsidiaries of US-listed companies: access and change management, backup and restore, and evidence for the external auditor’s ITGC testing.',
      cimke: 'SOX · ITGC',
    },
  ],
};

export async function szolgaltatasSorok(nyelv: Nyelv): Promise<SzolgaltatasSor[]> {
  const gyujtemeny = await getCollection(nyelv === 'en' ? 'szolgaltatasokEn' : 'szolgaltatasok');
  const elotag = nyelv === 'en' ? '/en/services/' : '/szolgaltatasok/';
  const fo = gyujtemeny
    .sort((a, b) => a.data.sorrend - b.data.sorrend)
    .map((sz) => ({
      href: `${elotag}${sz.id}/`,
      cim: sz.data.cim,
      osszefoglalo: sz.data.osszefoglalo,
      cimke: sz.data.cimke,
    }));
  return [...fo, ...KIEGESZITO[nyelv]];
}
