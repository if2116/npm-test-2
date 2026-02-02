const createNextIntlPlugin = require('next-intl/plugin');

// Use i18n config from root directory
const withNextIntl = createNextIntlPlugin('./i18n.ts');

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'npm-test-2';
const isGhPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  output: isGhPages ? 'export' : undefined,
  trailingSlash: true,

  basePath: isGhPages ? `/${repo}` : '',
  assetPrefix: isGhPages ? `/${repo}/` : '',

  images: {
    unoptimized: true,
  },
};

module.exports = withNextIntl(nextConfig);
