# InvoiceBuddy / AR Tracker Frontend

GitHub Pages-ready UX prototype.

## Important structure

GitHub Pages is configured to publish from:

```text
main / docs
```

So the published page must exist here:

```text
docs/index.html
```

This package is already structured that way.

## Fast upload path

1. Upload the contents of this folder to your `InvoiceBuddy` repository.
2. Keep GitHub Pages set to `Deploy from a branch`.
3. Use branch `main` and folder `/docs`.
4. Open: `https://x22abc.github.io/InvoiceBuddy/`

## Local React development path

```bash
npm install
npm run dev
```

When ready to rebuild the GitHub Pages version:

```bash
npm run build
```

That command outputs the built site into `docs/`.

## Why this fixes the 404

The old structure had the app nested here:

```text
docs/ar-tracker-frontend/index.html
```

But GitHub Pages was looking for:

```text
docs/index.html
```

This version places the public entry file at the correct path.
