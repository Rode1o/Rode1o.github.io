import type { ImageMetadata } from 'astro';

// Images live in src/assets/images so Astro can resize and compress them at build time
const images = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/images/*.{webp,png,jpg,jpeg}',
  { eager: true },
);

export function getImage(fileName: string): ImageMetadata {
  const image = images[`../assets/images/${fileName}`];
  if (!image) {
    throw new Error(`Image "${fileName}" not found in src/assets/images`);
  }
  return image.default;
}
