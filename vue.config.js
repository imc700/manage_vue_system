module.exports = {
    devServer: {
        proxy: {
            '/ks-auth': {
                target: 'http://localhost:7455',
                changeOrigin: true
            }
        }
    }
}
