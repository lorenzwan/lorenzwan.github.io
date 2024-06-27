import React from "react"
import { DocsThemeConfig } from "nextra-theme-docs"
import Image from "next/image"
import { useRouter } from "next/router"

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath == "/") {
      return {
        titleTemplate: "Lorenz Wan - Home"
      }
    }
    return {
      titleTemplate: "Lorenz Wan - %s"
    }
  },
  head: <>
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
      <meta property="og:title" content="Lorenz Wan"/>
      <meta property="og:description" content="A portfolio website as well as a documatation for myself." />
    </>,
  logo: <>
    <Image src="/images/logoClean.png" width={30} height={30} alt="Lorenz Wan"/>
    <span style={{marginLeft: ".6em", fontWeight: 500}}>
      Lorenz Wan
    </span>
  </>,
  primaryHue: {
    dark: 38,
    light: 32,
  },
  project: {
    link: "https://github.com/lorenzwan",
  },
  chat: {
    link: "https://www.linkedin.com/in/lorenzwan",
    icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"
      />
      <title>Linkedin</title>
    </svg>
    ),
  },
  search: {
    placeholder: "Search or jump to...",
  },
  sidebar: {
    toggleButton: true,
  },
  docsRepositoryBase: "https://github.com/lorenzwan/lorenzwan.github.io/tree/main/pages",
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
  toc: {
    backToTop: true,
  },
  gitTimestamp: null,
  navigation: false,
  footer: {
    text: "© 2016-Present Lorenz Wan - All Rights Reserved.",
  },
}

export default config