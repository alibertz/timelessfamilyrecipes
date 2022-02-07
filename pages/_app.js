// pages/_app.js
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import "../styles/Pages/Home/global.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Timeless Family Recipes</title>
        <meta name="description" content="Timeless Family Recieps" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
