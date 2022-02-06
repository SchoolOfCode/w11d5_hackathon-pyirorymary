import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { useUser } from "@auth0/nextjs-auth0";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (!user) {
    return (
      <div>
        <h1 className={styles.title}>Please login</h1>
        <a className={styles.btn} href="api/auth/login">
          Login
        </a>
      </div>
    );
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <>
        <Head>
          <title>NextJS | Home</title>
        </Head>
        <main>
          <h1 className={styles.title}>NextJS Basics</h1>

          <p className={styles.text}>
            This page gives a very brief overview of why developers may choose
            to use Next JS to create User Interfaces.
          </p>

          <Link href="/quote">
            <a className={styles.btn}>Get some Humour</a>
          </Link>
          <Link href="/renderingtypes">
            <a className={styles.btn}>Learn About Rendering</a>
          </Link>
        </main>
      </>
    );
  }
}
