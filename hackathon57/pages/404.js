import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

function OhDear() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="oh-dear">
      <h2>Sorry, this page doesn't exist!</h2>
      <p>You'll redirected back to Home...</p>
      <Link href="/">
        <a className="oh-dear-link">Go back to Home</a>
      </Link>
    </div>
  );
}

export default OhDear;
