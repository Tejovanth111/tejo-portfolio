# Adding portfolio images

- Project imagery: add files under `projects/<project-slug>/`.
- Personal gallery: add files under `gallery/`.
- About portrait: add a file named `portrait.<extension>` under `about/`.

Supported formats are AVIF, GIF, JPEG, PNG, and WebP. Images are discovered from their folders and displayed through the reusable media components. Files are ordered by name. The filename is used as fallback alt text; add a clearer description or an optional caption in `data/media.ts` when needed.

The folders intentionally contain no default photography. Only images placed here by Tejovanth are shown. In production, added files appear after the next build/deploy.
