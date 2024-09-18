/** @type {import('next').NextConfig} */
const nextConfig = {
    modularizeImports: {
        'iconoir-react': {
            transform: 'iconoir-react/dist/esm/server/{{member}}',
            preventFullImport: true,
        },
    },
    experimental: {
        optimizePackageImports: ['iconoir-react'],
    },
}

export default nextConfig
