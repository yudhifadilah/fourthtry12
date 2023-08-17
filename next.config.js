/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'custom',
        loaderFile: './lib/Grid.tsx',
      },
}
module.exports = nextConfig
