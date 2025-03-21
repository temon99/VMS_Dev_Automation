import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
const origLog1 = Cypress.log
Cypress.log = function (opts, ...other) {
    if (
        opts.displayName === 'fetch' &&
        opts.url.startsWith("https://www.google.com/")
    ) {
        return
    }
    return origLog1(opts, ...other)
}