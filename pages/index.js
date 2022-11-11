import Head from "next/head";
import Image from "next/image";
import Hero from "../components/heroSection/Hero";
import Header from "../components/layout/Header";
import styles from "../styles/Home.module.css";

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
