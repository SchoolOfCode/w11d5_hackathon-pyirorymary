import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

function Navbar() {
  const { user } = useUser();
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
      {user && <a href="api/auth/logout">Logout</a>}
    </nav>
  );
}

export default Navbar;
