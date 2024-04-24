/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['ckvsqqowzeuxyghgsafq.supabase.co'],
  },
};

module.exports = nextConfig;
