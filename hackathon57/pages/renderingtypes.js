import React from "react";
import InfoCard from "../components/InfoCard";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

function PreRender() {
  return (
    <div className="renderingTypesContainer">
      <h1>Why is Next JS useful to us?</h1>
      <InfoCard
        title="Client-Side Rendering"
        text="This is when the HTML skeleton is loaded with a link containing the
				Javascript code and the react code, which the browser reads and renders.
				The 'initial paint' can take a long time and can leave a poor User
				Experience. This is where NextJS can come in handy."
        src="https://miro.medium.com/max/2000/1*bFkE292yNaxErbbhJ8Ee-w.png"
      />

      <InfoCard
        title="Server-Side Rendering"
        text="Traditionally, this is how websites in their most raw form were
				presented to users - fully rendered HTML files which load as soon as the
				resource is clicked. It is very quick as the information is already
				loaded from the server. As soon as the user makes the request for
				whatever resource, the server will build the with the most recently
				fetched data before it even reaches the page. We can use the
				getServerSideProps() method of the SDK to render pages in this way."
        src={"/getServerSideProps.png"}
      />
      <InfoCard
        title="Pre-Rendering"
        text="Pre-rendering loads the page at build time and there is a useful method
				which comes as part of the NextJS SDK - getStaticProps() This method
				could be used to call an API returning data which is then passed to the
				component in the form of props."
        src="/getStaticProps.png"
      />
      <InfoCard
        title="Incremental Static Regeneration "
        text="This type of rendering sits somewhere inbetween CSR AND SSR. As part of
				the getStaticProps() method, you can add a 'revalidate' options returned
				from this method (shown below) which can rebuild the page whenever new
				request is made within a certain time interval."
        src="/revalidate.png"
      />
      <InfoCard
        title="File Structure"
        text="Within NextJS applicaitons, you have a Pages directory, each file
				exports a react component. Each page file is basically a route mirroring the URL
				e.g. myapplication/users if you had a page called users.js within the
				Pages folder."
        src="/filestruct.png"
      />
      <InfoCard
        title="Routing"
        text="NextJS provides a useful useRouter() method which can be utilised for
				easy navigation of the application."
        text2=" Be sure to Import {useRouter} from 'next/router' at the top of the page and then initiate router by calling useRouter
				const router = useRouter()"
        src="/routeLinksExample.png"
      />
    </div>
  );
}

export default PreRender;

export const getServerSideProps = withPageAuthRequired();
