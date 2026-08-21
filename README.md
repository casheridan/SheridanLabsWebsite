# Sheridan Labs corporate website

A responsive multi-page React website for Sheridan Labs, built with Next.js and vinext.

## Pages

- Home
- Products
- Services
- About
- Contact

## Local development

Node.js 22.13 or newer is required.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Railway

The included `railway.json` uses the production build and start commands automatically. Set a custom `SITE_URL` if you want social-preview metadata to use a domain other than Railway's generated public domain.

The contact form opens the visitor's default email client and targets `hello@sheridanlabs.ai`. Update that address in `app/contact/page.tsx` and `app/components.tsx` before launch if needed.

## Visual assets

The supplied screenshot references are stored in `public/reference` and displayed through responsive CSS crops. `public/og.png` is the site's dedicated social-preview card.
