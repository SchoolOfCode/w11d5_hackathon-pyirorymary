import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>Meals4U</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/search">
        <a>Search</a>
      </Link>
      <Link href="/meals">
        <a>Dish of the day</a>
      </Link>
    </nav>
  );
}

export default Navbar;
