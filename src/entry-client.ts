import { createApp } from './main'

const { app, router, store } = createApp()

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}
// wait until router has resolved all async before hooks
// and async components...
router.onReady(() => {
    // actually mount to DOM
    app.$mount('#app')
})