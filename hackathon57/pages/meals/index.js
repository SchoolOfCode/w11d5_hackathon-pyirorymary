import Results from "../../components/Results";

export const getStaticProps = async () => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php
  `);
  const data = await res.json();

  return {
    props: { meals: data.meals },
  };
};

function Meals({ meals }) {
  return <Results meals={meals} />;
}

export default Meals;
