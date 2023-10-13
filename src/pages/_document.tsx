import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <script src="/my-external-script.js"></script> */}
        <Script
          type="text/javascript"
          src="http://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ugm16gkcw2"
        />
        <Script type="text/javascript" src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ugm16gkcw2&submodules=geocoder"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
