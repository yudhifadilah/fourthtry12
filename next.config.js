/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ? `/${process.env.NEXT_PUBLIC_BASE_PATH}` : '',
    images: {
        loader: 'imgix',
        path: `${process.env.NEXT_PUBLIC_BASE_PATH}/_next/static/images`
    }
}
module.exports = nextConfig
