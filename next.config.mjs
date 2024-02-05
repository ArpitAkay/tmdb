/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                port: '',
                pathname: '/t/p/original/**'
            }
        ]
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/region/IN/movies/1",
                permanent: true
            }
        ]
    }
};

export default nextConfig;
