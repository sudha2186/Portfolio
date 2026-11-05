/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  ...(isGithubPages
    ? {
        output: "export",
        basePath: "/Portfolio",
        trailingSlash: true,
      }
    : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? "/Portfolio" : "",
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;