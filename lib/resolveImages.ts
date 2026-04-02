import fs from 'fs';
import path from 'path';

const SUPPORTED_EXTS = ['.png', '.jpg', '.jpeg', '.webp'];

/**
 * Scan `public/<subDir>` and return a map of lowercase base filenames
 * (without extension) to their public URL paths.
 *
 * Example: file `public/images/spatial/L2 Pro.png`
 *   → key: "l2 pro"  value: "/images/spatial/L2 Pro.png"
 *
 * Runs server-side only (fs). Safe to call from Server Components and
 * build-time contexts. Returns an empty map if the directory is missing.
 */
export function resolveImageDir(subDir: string): Record<string, string> {
  const absDir = path.join(process.cwd(), 'public', subDir);
  const map: Record<string, string> = {};

  let files: string[];
  try {
    files = fs.readdirSync(absDir);
  } catch {
    return map;
  }

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!SUPPORTED_EXTS.includes(ext)) continue;
    const base = path.basename(file, path.extname(file)).toLowerCase();
    if (!map[base]) {
      map[base] = `/${subDir}/${file}`;
    }
  }

  return map;
}
