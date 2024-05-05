/** @type {import('next').NextConfig} */
import NextPwa from 'next-pwa';

const withPwa = NextPwa({
  dest: 'public',
  register: true,
  skipWaiting: true,
  
});
const nextConfig = {};

export default withPwa(nextConfig);
