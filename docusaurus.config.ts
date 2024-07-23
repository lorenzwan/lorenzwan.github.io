import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Lorenz Wan',
  tagline: 'A character rigger / tech artist who likes DIY',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://lorenzwan.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lorenzwan', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/JetBrainsMono-Regular.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        pages: false,
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        docsRouteBasePath: "/",
        indexBlog: false,
        removeDefaultStopWordFilter: true,
        removeDefaultStemmer: true,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Lorenz Wan',
      logo: {
        alt: 'Lorenz Wan Logo',
        src: 'img/logoSmall.png',
      },
      items: [
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
      ],
      copyright: `Copyright © 2016-${new Date().getFullYear()} Lorenz Wan - All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['powershell'],
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    parseFrontMatter: async (params) => {
      // Reuse the default parser
      const result = await params.defaultParseFrontMatter(params)
      result.frontMatter.pagination_prev = null
      result.frontMatter.pagination_next = null
      return result
    },
  },
};

export default config;
