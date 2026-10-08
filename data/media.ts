import { readdirSync } from "node:fs";
import path from "node:path";

export type MediaAsset = {
  src: string;
  alt: string;
  filename: string;
};

export const mediaDirectories = {
  gallery: "gallery",
  about: "about",
  project: (slug: string) => `projects/${slug}`,
} as const;

/** Drop image files into these folders; use portrait.* for the About portrait. */
/** Add descriptions or captions here when a filename alone is not enough. */
export const imageAltText: Record<string, string> = {};
export const imageCaptions: Record<string, string> = {};

const imageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"]);
const publicDirectory = path.resolve(process.cwd(), "public");

function readableFilename(filename: string) {
  return path
    .parse(filename).name
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getMediaAssets(directory: string): MediaAsset[] {
  const targetDirectory = path.resolve(publicDirectory, directory);
  if (!targetDirectory.startsWith(`${publicDirectory}${path.sep}`)) return [];

  try {
    const entries = readdirSync(targetDirectory, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile() && imageExtensions.has(path.extname(entry.name).toLowerCase()))
      .sort((first, second) => first.name.localeCompare(second.name))
      .map((entry) => {
        const src = `/${directory}/${entry.name}`;
        return {
          src,
          filename: entry.name,
          alt: imageAltText[src] ?? defaultAltText(directory, entry.name),
        };
      });
  } catch {
    return [];
  }
}

function defaultAltText(directory: string, filename: string) {
  if (directory === mediaDirectories.about && /^portrait\./i.test(filename)) {
    return "Professional portrait of Tejovanth K";
  }
  return readableFilename(filename);
}

export function getProjectMedia(slugs: string[]) {
  const entries = slugs.map((slug) => [slug, getMediaAssets(mediaDirectories.project(slug))] as const);
  return Object.fromEntries(entries);
}

export function getAboutPortrait() {
  const assets = getMediaAssets(mediaDirectories.about);
  return assets.find((asset) => /^portrait\./i.test(asset.filename)) ?? null;
}
