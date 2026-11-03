---
title: Kenapa integrasi ke DHIS2 butuh mediator
description: Catatan singkat tentang alasan saya selalu menaruh lapisan mediator di antara sistem sumber dan DHIS2.
date: 2026-11-01
tags: [dhis2, interoperabilitas, nodejs]
---

> Ini contoh tulisan. Edit atau hapus file ini di `src/content/blog/id/mediator-dhis2.md`.

Saat sistem sumber — misalnya aplikasi pencatatan kasus — perlu mengirim data ke DHIS2, godaan pertama adalah memanggil API DHIS2 langsung dari aplikasi itu. Untuk prototipe, itu cukup. Untuk sistem yang dipakai banyak fasilitas, saya hampir selalu menaruh **mediator** di tengah.

## Apa yang dikerjakan mediator

- **Pemetaan data.** Kode wilayah, kode indikator, dan format tanggal di sistem sumber jarang sama dengan metadata DHIS2. Pemetaan cukup ada di satu tempat.
- **Antrean dan retry.** Koneksi dari daerah tidak selalu stabil. Mediator menyimpan payload dan mencoba lagi, sehingga aplikasi sumber tidak perlu tahu.
- **Log yang bisa dibaca.** Ketika angka di dashboard tidak cocok, log di mediator adalah tempat pertama untuk mencari tahu data mana yang tertolak dan kenapa.

## Bentuk sederhananya

```ts
async function sendToDhis2(payload: SourceReport) {
  const dataValues = mapToDataValues(payload); // pemetaan di satu tempat
  const job = await queue.add('dhis2:dataValueSets', { dataValues });
  logger.info({ jobId: job.id, orgUnit: payload.orgUnit }, 'queued');
}
```

Hasilnya: aplikasi sumber tetap sederhana, dan tim yang memelihara integrasi punya satu tempat untuk diperiksa.
