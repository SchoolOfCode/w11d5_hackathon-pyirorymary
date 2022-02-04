import Link from "next/link";

function Navbar() {
	return (
		<nav>
			<div className="logo">
				<h1>NextJS</h1>
			</div>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/renderingtypes">
				<a>Rendering</a>
			</Link>
			<Link href="/quote">
				<a>Quote of the day</a>
			</Link>
		</nav>
	);
}

export default Navbar;
