import Head from "next/head";

import Hero from "../components/heroSection/Hero";
import Header from "../components/layout/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Indie Hands - Home</title>
        <meta
          name="description"
          content="Best mehndi in the karachi with beautiful desings."
        />
        <link rel="icon" href="/mehndi.png" />
      </Head>

      <Header />
      <Hero />
    </div>
  );
}
