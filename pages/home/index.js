import Head from "next/head";
import Header from "../../components/layout/header";

const index = () => {
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
    </div>
  );
};

export default index;
