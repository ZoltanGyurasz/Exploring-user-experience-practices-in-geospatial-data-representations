// vue.config.js

module.exports = {
    chainWebpack: config => {
        // GraphQL Loader
        config.module
            .rule('geojson')
            .test(/\.geojson$/)
            .use('json-loader')
            .loader('json-loader')
            .end()
    }
}