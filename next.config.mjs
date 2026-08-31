/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/detail/obrazy-na-sirku/0",
        destination: "/detail/obrazy-prirody/bizoni-v-krajine",
        permanent: true,
      },
      {
        source: "/detail/obrazy-na-sirku/1",
        destination: "/detail/obrazy-prirody/probuzeni-podzimu",
        permanent: true,
      },
      {
        source: "/detail/obrazy-na-vysku/0",
        destination: "/detail/obrazy-prirody/na-prochazce",
        permanent: true,
      },
      {
        source: "/detail/obrazy-na-vysku/1",
        destination: "/detail/obrazy-prirody/pan-tukan",
        permanent: true,
      },
      {
        source: "/detail/obrazy-na-vysku/2",
        destination: "/detail/obrazy-prirody/kde-leto-kotvi",
        permanent: true,
      },
      {
        source: "/detail/obrazy-na-vysku/3",
        destination: "/detail/obrazy-prirody/na-hladine",
        permanent: true,
      },
      {
        source: "/galerie/obrazy-na-sirku",
        destination: "/galerie/obrazy-prirody",
        permanent: true,
      },
      {
        source: "/galerie/obrazy-na-vysku",
        destination: "/galerie/abstraktni-obrazy",
        permanent: true,
      },
      {
        source: "/detail/obrazy-na-sirku/:photoId",
        destination: "/detail/obrazy-prirody/:photoId",
        permanent: true,
      },
      {
        source: "/detail/obrazy-na-vysku/:photoId",
        destination: "/detail/obrazy-prirody/:photoId",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
