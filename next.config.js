/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'imgix',
        path: '/_next/static/images'
    }
}
module.exports = nextConfig
