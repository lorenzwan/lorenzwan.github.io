# Hosting [Docusaurus](https://docusaurus.io/) on GitHub

## Overview

I used to host Joomla and WordPress on Bluehost. However, hosting became too pricey for a portfolio that no one visits XD. I don’t really need all the backend complexity. What I’m looking for is something simple, easy to update, and with support for syntax highlighting. During my research, two options caught my attention: Docusaurus and Nextra. Nextra surprised me because I could set up a website on Vercel via GitHub in just a few minutes. But I’d prefer not to rely on Vercel if I can self-host on GitHub. ~~I might give Docusaurus a shot someday if Nextra lacks some features I need.~~ Then, I switched to Docusaurus for better customization and more detailed documentation.

## Steps

1. Create a public repository
    - Name it `{username}.github.io`, or anything if using custom domain
2. Install [VSCode](https://code.visualstudio.com), [Git](https://git-scm.com), [Node.js](https://nodejs.org/en)
    - Cloning the repository
    - Run `npx create-docusaurus@latest my-website classic --typescript` for the classic template
    - Run `npx install` for the modules
    - Find the GitHub action files from [Deployment | Docusaurus](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions)
    - Commit & Push
3. Handy commands
    - Test `npm run start` (Development Mode)
    - Build `npm run build`, then test `npm run serve` (Production Mode)
    - Update `npm update`
    - `git reset` / Revert to previous commit `git reset --soft HEAD~`