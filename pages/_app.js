import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <title>Sorting Hat AI</title>
        <meta
          name='description'
          content='Your college advisor'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
