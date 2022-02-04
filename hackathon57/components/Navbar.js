import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>Programmer's Qoutes</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/meals">
        <a>Qoutes of the day</a>
      </Link>
    </nav>
  );
}

export default Navbar;
