import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import MyPrismLight from './src/theme/myPrismLight';
import MyPrismDark from './src/theme/myPrismDark';

const config: Config = {
  title: 'Lorenz Wan',
  tagline: 'A character rigger / tech artist who likes DIY',
  favicon: '/img/favicon.ico',

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
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/JetBrainsMono-Italic.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/JetBrainsMono-ExtraBold.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/JetBrainsMono-ExtraBoldItalic.woff2',
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
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          sidebarCollapsed: false,
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
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        docsRouteBasePath: '/',
        indexBlog: false,
        removeDefaultStopWordFilter: true,
        removeDefaultStemmer: true,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig: {
    image: '/img/logo.png',
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Lorenz Wan',
      logo: {
        alt: 'Lorenz Wan Logo',
        src: '/img/logoSmall.png',
      },
      items: [
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/lorenzwan/',
          position: 'right',
          className: 'navbar-linkedin-link',
          title: 'LinkedIn',
          'aria-label': 'LinkedIn',
        },
        {
          href: 'https://github.com/lorenzwan',
          position: 'right',
          className: 'navbar-github-link',
          title: 'GitHub',
          'aria-label': 'GitHub',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    footer: {
      links: [
      ],
      copyright: `© 2016-${new Date().getFullYear()} Lorenz Wan. All Rights Reserved.`,
    },
    prism: {
      theme: MyPrismLight,
      darkTheme: MyPrismDark,
      additionalLanguages: ['powershell', 'json', 'makefile'],
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    parseFrontMatter: async (params) => {
      // Reuse the default parser
      const result = await params.defaultParseFrontMatter(params)
      result.frontMatter.pagination_prev = null
      result.frontMatter.pagination_next = null
      result.frontMatter.toc_max_heading_level = 4
      return result
    },
  },
};

export default config;
