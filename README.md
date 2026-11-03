# Portofolio Yuda Karnaen

Situs portofolio statis dua bahasa (ID/EN) dengan tema terang/gelap. Dibangun dengan Astro 7 + Tailwind CSS v4.

## Menjalankan

Butuh Node.js >= 22.23.4 (lihat `.nvmrc`).

```sh
nvm use
npm install
npm run dev       # http://localhost:4321
npm run build     # hasil di dist/
npm run preview
npx astro check   # cek tipe
```

## Mengubah konten

| Apa                         | File                                   |
| --------------------------- | -------------------------------------- |
| Nama, bio, email, sosial    | `src/data/profile.ts`                  |
| Proyek                      | `src/data/projects.ts`                 |
| Pengalaman & pendidikan     | `src/data/experience.ts`               |
| Keahlian                    | `src/data/skills.ts`                   |
| Teks UI (menu, tombol, dll) | `src/i18n/ui.ts`                       |
| Tulisan blog                | `src/content/blog/{id,en}/<slug>.md`   |
| CV yang diunduh             | `public/cv-yuda-karnaen.pdf`           |

Tulisan blog: pakai nama file yang sama di `id/` dan `en/` agar tombol ganti bahasa
mengarah ke terjemahannya. Tambahkan `draft: true` di frontmatter untuk menyembunyikan tulisan saat build.

## Deploy

Ganti `site` di `astro.config.mjs` dengan domain asli, lalu deploy folder `dist/`:

- **Vercel / Netlify**: impor repo, build command `npm run build`, output `dist`.
- **GitHub Pages**: pakai workflow resmi `withastro/action`.
