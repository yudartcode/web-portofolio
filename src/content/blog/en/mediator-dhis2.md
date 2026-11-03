---
title: Why DHIS2 integrations need a mediator
description: A short note on why I always put a mediator layer between source systems and DHIS2.
date: 2026-11-01
tags: [dhis2, interoperability, nodejs]
---

> This is a sample post. Edit or delete it at `src/content/blog/en/mediator-dhis2.md`.

When a source system — say, a case recording app — needs to send data to DHIS2, the first temptation is to call the DHIS2 API straight from that app. For a prototype, that's fine. For a system used by many facilities, I almost always put a **mediator** in between.

## What the mediator does

- **Data mapping.** Region codes, indicator codes, and date formats in the source system rarely match DHIS2 metadata. The mapping lives in one place.
- **Queueing and retries.** Connections from the regions aren't always stable. The mediator stores the payload and retries, so the source app doesn't have to care.
- **Readable logs.** When dashboard numbers don't add up, the mediator's log is the first place to find which data was rejected and why.

## The simple version

```ts
async function sendToDhis2(payload: SourceReport) {
  const dataValues = mapToDataValues(payload); // mapping in one place
  const job = await queue.add('dhis2:dataValueSets', { dataValues });
  logger.info({ jobId: job.id, orgUnit: payload.orgUnit }, 'queued');
}
```

The result: the source app stays simple, and the team maintaining the integration has one place to look.
