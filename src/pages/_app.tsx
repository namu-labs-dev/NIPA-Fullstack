import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=GTM-MMHM4T2C`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-ER96YMB2BN');
            `,
          }}
        />
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MMHM4T2C"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

export default api.withTRPC(MyApp);
