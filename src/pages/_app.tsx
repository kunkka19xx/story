import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/styles/hide.css";
import "@/styles/text.css";
import "@/styles/wrap.css";
import "@/styles/show.css";
import "@/styles/height.css";


import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head >
        <link  rel="icon" href="/icon.png" />
        {/* Các thẻ khác trong <Head> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
