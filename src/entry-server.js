import { createRenderer } from 'vue-server-renderer';
import { createApp } from './main'

export function render(url, manifest, template) {
    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp()

        router.push(url).catch(err => { })

        // wait until router has resolved possible async hooks
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents()
            // no matched routes
            if (!matchedComponents.length) {
                return reject({ code: 404 })
            }
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
            const state = JSON.stringify(store.state);

            return renderer.renderToString(app, context)
                .then((vueHtml) => {
                    const html = vueHtml.replace(`<!--vuex-state-->`, state);
                    return resolve(html);
                }).catch(err => {
                    console.error(err)
                })
        }, reject)
    })
}