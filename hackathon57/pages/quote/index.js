export const getStaticProps = async () => {
  const res =
    await fetch(`https://programming-quotes-api.herokuapp.com/Quotes/random
  `);
  const data = await res.json();

  return {
    props: { quotes: data.en },
  };
};

function Quote({ quotes }) {
  return <p>{quotes} </p>;
}

export default Quote;
