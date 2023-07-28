import Head from "next/head";
import MainPage from "../components/ui/MainPage";



export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <MainPage />
    </>
  );
}
