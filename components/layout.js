import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { m } from 'framer-motion'

import { isBrowser, useWindowSize } from '@lib/helpers'
import { pageTransitionSpeed } from '@lib/animate'

import HeadSEO from '@components/head-seo'
import CookieBar from '@components/cookie-bar'
import Header from '@components/header'
import Footer from '@components/footer'

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: pageTransitionSpeed / 1000,
      delay: 0.2,
      ease: 'linear',
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: pageTransitionSpeed / 1000,
      ease: 'linear',
      when: 'beforeChildren',
    },
  },
}

const Layout = ({ site = {}, page = {}, schema, children }) => {
  // set window height var
  const { height: windowHeight } = useWindowSize()

  // set header height
  const [headerHeight, setHeaderHeight] = useState(null)

  useEffect(() => {
    if (isBrowser) {
      document.body.style.setProperty('--vh', `${windowHeight * 0.01}px`)
    }
  }, [windowHeight])

  return (
    <>
      <HeadSEO site={site} page={page} schema={schema} />
      {site.gtmID && (
          <>
            <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${site.gtmID}`}
          />
           <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${site.gtmID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        </>
      )}

      <m.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        style={headerHeight ? { '--headerHeight': `${headerHeight}px` } : null}
      >
        <CookieBar data={site.cookieConsent} />
        <Header
          data={site.header}
          isTransparent={page.hasTransparentHeader}
          onSetup={({ height }) => setHeaderHeight(height)}
        />
        <main id="content">{children}</main>
        <Footer data={site.footer} />
      </m.div>
    </>
  )
}

export default Layout
