import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>

        <title>NextJS | Home</title>
      </Head>
      <main>
        <h1 className={styles.title}>NextJS Basics</h1>

        <p className={styles.text}>
          Nunc libero nisl ultrices. Vivamus. Volutpat dis, fringilla velit
          penatibus dui et sagittis dictumst cum. Nostra. Mi tincidunt praesent
          platea.
        </p>
        <p className={styles.text}>
          Nunc libero nisl ultrices. Vivamus. Volutpat dis, fringilla velit
          penatibus dui et sagittis dictumst cum. Nostra. Mi tincidunt praesent
          platea.
        </p>

        <Link href="/qoutes">
          <a className={styles.btn}>Get some Humur</a>

        </Link>
      </main>
    </>
  );
}
