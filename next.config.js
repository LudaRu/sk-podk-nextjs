const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
    env: {
        API_URL: process.env.API_URL,
    },
    images: {
        domains: ['xn----htbqcfpgn5dvd.xn--p1ai', 'localhost', 'picsum.photos', '25.33.248.10'],
        deviceSizes: [50, 200, 360, 640, 720, 960, 1140, 1320, 2000],
        // imageSizes: [16, 32, 48, 64, 96, 128],
    },
    future: {

    },
})
