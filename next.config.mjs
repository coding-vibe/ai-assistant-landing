/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    emotion: true,
  },
  images: {
    remotePatterns: [
      // {
      //   protocol: "http",
      //   hostname: "localhost",
      //   port: "1337",
      // },
      {
        protocol: "https",
        // port: "",
        hostname: "balanced-ducks-038877abb4.media.strapiapp.com",
        pathname: "**",
      },
    ],
  },
};
export default nextConfig;
