import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
  return (
      <Html lang="en">
          <Head>
              <meta name="description" content="A template next.js app"/>
              <link rel="icon" href="/favicon.ico"/>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
              <link
                  href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@0;1&family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                  rel="stylesheet"
              />
          </Head>
          <body>
          <Main/>
          <NextScript/>
          </body>
      </Html>
  )
}
