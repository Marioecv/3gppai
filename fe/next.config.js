// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
	//destination: 'https://back-end-897351610590.us-central1.run.app/:path*',
	destination: 'https://ts-be-897351610590.us-central1.run.app/:path*',
	//destination: 'http://localhost:5002/:path*',
      },
    ];
  },
  images: {
    domains: ['ik.imagekit.io', 'storage.googleapis.com']
  },	
  compress: false, // <--- esto es crucial para permitir streaming	
};

module.exports = nextConfig;

