import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meal4U | Home</title>
      </Head>
      <main>
        <h1 className={styles.title}>Home of your fav meals</h1>
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
        <Link href="/meals">
          <a className={styles.btn}>Go eat well</a>
        </Link>
      </main>
    </>
  );
}
