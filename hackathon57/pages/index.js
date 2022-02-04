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
					This page gives a very brief overview of why developers may choose to
					use Next JS to create User Interfaces.
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
