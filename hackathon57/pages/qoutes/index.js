import Results from "../../components/Results";

export const getStaticProps = async () => {
  const res = await fetch(`https://programming-quotes-api.herokuapp.com/Quotes/random
  `);
  const data = await res.json();

  return {
    props: { qoutes: data.qoutes },
  };
};

function Quotes({ qoutes }) {
  return <Results qoutes={qoutes} />;
}

export default Quotes;
