/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'default',
        path: `${process.env.NEXT_PUBLIC_BASE_PATH}/_next/static/images`
    }
}
module.exports = nextConfig
