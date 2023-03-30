import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
  return (
      <Html lang="en">
          <Head>
              <meta name="description" content="A template next.js app"/>
              <link rel="icon" href="/favicon.ico"/>
          </Head>
          <body>
          <Main/>
          <NextScript/>
          </body>
      </Html>
  )
}
