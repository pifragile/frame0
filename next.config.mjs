/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: '/cosmiccowboys',
        destination: 'https://cosmiccowboys.cloud',
        permanent: false
      },
      {
        source: '/pinatacloud',
        destination: 'https://www.pinata.cloud/blog/how-to-make-a-frame-on-farcaster-using-ipfs',
        permanent: false
      },
      {
        source: '/video',
        destination: 'https://youtu.be/wUt5NjXHSO4',
        permanent: false
      }
    ]
  }
};

if (
  process.env.LD_LIBRARY_PATH == null ||
  !process.env.LD_LIBRARY_PATH.includes(
    `${process.env.PWD}/node_modules/canvas/build/Release:`,
  )
) {
  process.env.LD_LIBRARY_PATH = `${
    process.env.PWD
  }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ''}`;

  process.env.LD_PRELOAD = `${
    process.env.PWD
  }/node_modules/canvas/build/Release/libz.so.1`;

}

export default nextConfig;
