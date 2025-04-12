let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config.mjs')
} catch (e) {
  try {
    userConfig = await import("./v0-user-next.config")
  } catch (innerError) {}
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for GitHub Pages
  output: 'export',
  basePath: '/AfriHunTechAlliance', // ← Verify EXACT repo name match
  
  // Existing configuration
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true }, // ← Already correct for static export
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  }
}

if (userConfig) {
  const config = userConfig.default || userConfig
  for (const key in config) {
    if (typeof nextConfig[key] === 'object' && !Array.isArray(nextConfig[key])) {
      nextConfig[key] = { ...nextConfig[key], ...config[key] }
    } else {
      nextConfig[key] = config[key]
    }
  }
}

export default nextConfig