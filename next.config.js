const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'npm-test-2';
const isGhPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  output: 'export',
  trailingSlash: true,

  basePath: isGhPages ? `/${repo}` : '',

  images: {
    unoptimized: true,
  },
};

module.exports = withNextIntl(nextConfig);