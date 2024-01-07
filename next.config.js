/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "images.unsplash.com",
      "dl.dropboxusercontent.com",
    ],
  },
};

module.exports = nextConfig;
