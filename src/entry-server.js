import { createRenderer } from 'vue-server-renderer';
import { createApp } from './main'

const isDev = process.env.NODE_ENV === 'development'

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
export function render(url, manifest, template) {
    return new Promise((resolve, reject) => {
        const s = isDev && Date.now()
        const { app, router, store } = createApp()

        // set router's location
        router.push(url).catch(err => {})

         // wait until router has resolved possible async hooks
         router.onReady(() => {
            const matchedComponents = router.getMatchedComponents()
            // no matched routes
            if (!matchedComponents.length) {
                return reject({ code: 404 })
            }
            isDev && console.log(`data pre-fetch: ${Date.now() - s}ms`)
            const renderer = createRenderer({
                manifest,
                template,
            })
            const context = {
                title: "Test",
                meta: `
                    <meta name="description" content="TEST"/>
                `
            };
            renderer.renderToString(app, context).then(html => {
                resolve(html)
            }).catch(err => {
                console.error(err)
            })
        }, reject)
    })
}