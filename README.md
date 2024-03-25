# How I host Nextra Docs on GitHub without Vercel
1. Create a public repository
   - Name it *.github.io
2. Get VSCode, Git, Node.js
   - Cloning the repository
   - run `npm i next react react-dom nextra nextra-theme-docs`
   - follow https://nextra.site/docs/docs-theme/start for creating
     - `package.json`
     - `next.config.js`
       - To enable a static export,
       - `output: "export"`
       - `images: {unoptimized: true}`
       - details in https://nextjs.org/docs/app/building-your-application/deploying/static-exports
     - `theme.config.jsx`
     - `pages/index.mdx`
   - Create a .gitignore
   - Commit & Push
3. Go to Repository settings > Pages > Build and deployment
   - GitHub Actions
   - Next.js > Configure
   - Remove
     - `name: Static HTML export with Next.js`
     - `run: ${{ steps.detect-package-manager.outputs.runner }} next export`
     - since we enabled static export in `next.config.js`
