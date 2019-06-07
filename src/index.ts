import CloudflareWorkerGlobalScope from 'types-cloudflare-worker';
declare var self: CloudflareWorkerGlobalScope;

export class Worker {
  public async handle(event: FetchEvent) {
    const originResponse = fetch(event.request, {
      cf: {
        minify: {
          html: true,
        },
      },
    });

    return originResponse;
  }
}

self.addEventListener('fetch', (event: Event) => {
  const worker = new Worker();
  const fetchEvent = event as FetchEvent;
  fetchEvent.respondWith(worker.handle(fetchEvent));
});
