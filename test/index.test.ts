/*
 * Using WebWorker library included with TypeScript
 * tsc --lib es5,webworker # or anything es5+
 *
 * https://github.com/Microsoft/TypeScript/issues/14877#issuecomment-340279293
 */
import { CloudflareWorkerGlobalScope } from 'types-cloudflare-worker';
declare var self: CloudflareWorkerGlobalScope;

import makeCloudflareWorkerEnv from 'cloudflare-worker-mock';

describe('worker', () => {
  beforeEach(() => {
    // Merge the Cloudflare Worker Environment into the global scope.
    Object.assign(global, makeCloudflareWorkerEnv());
    // Clear all module imports.
    jest.resetModules();
    // Import and init the Worker.
    jest.requireActual('../src/index');
  });

  it('should add listeners', async () => {
    expect(self.listeners.get('fetch')).toBeDefined();
  });

  it('should return Hello', async () => {
    fetchMock.mockResponseOnce('Hello');

    const request = new Request('/path');
    const response = await self.trigger('fetch', request);

    expect(fetchMock).toBeCalledTimes(1);
    expect(response.status).toBe(200);
    expect(await response.text()).toBe('Hello');
  });
});
