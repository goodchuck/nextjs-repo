const isProd = process.env.NODE_ENV === 'production';
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // assetPrefix: isProd ? '/nextjs-repo' : '',
    // basePath: isProd ? '/nextjs-repo' : '',
    images: {
        domains: ['noticon-static.tammolo.com', 'loremflickr.com'],
        unoptimized: true
    },
};

export default nextConfig;
