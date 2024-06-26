# How I host Nextra Docs on GitHub without Vercel
1. Create a public repository
   - Name it `{username}.github.io`
2. Get VSCode, Git, Node.js
   - Cloning the repository
   - Run `npm i next react react-dom nextra nextra-theme-docs`
   - Create following files, details in https://nextra.site/docs/docs-theme/start
     - `package.json`
     - `next.config.js`
       - Enable a **static export**, details in https://nextjs.org/docs/app/building-your-application/deploying/static-exports
       - `output: "export"`
       - `images: {unoptimized: true}`
     - `theme.config.jsx`
     - `pages/index.mdx`
   - Create a .gitignore
   - Commit & Push
3. Go to Repository settings > Pages > Build and deployment
   - GitHub Actions > Next.js > Configure
   - Remove following codes from `nextjs.yml`
     - `name: Static HTML export with Next.js`
     - `run: ${{ steps.detect-package-manager.outputs.runner }} next export`
     - since **static export** is enabled in `next.config.js`
4. Handy commands
   - Update `npm update`
   - Test `npm run dev` (Development Mode)
   - Build `npm run build`, then test `npx serve@latest ./out` (Production Mode)
      - `npm run start` (Production Mode) **doesn't** work with static export
   - `git reset` / Revert to previous commit `git reset --soft HEAD~`
