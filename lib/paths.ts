const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function withBasePath(path: string): string {
  if (!path || !basePath) return path;
  if (path.startsWith(basePath)) return path;
  if (!path.startsWith('/')) {
    return `${basePath}/${path}`.replace(/\/{2,}/g, '/');
  }
  return `${basePath}${path}`.replace(/\/{2,}/g, '/');
}
