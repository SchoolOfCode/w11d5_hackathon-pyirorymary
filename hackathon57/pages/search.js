import { useState } from "react";
import Results from "../components/Results.js";

const Search = () => {
  const [search, setSearch] = useState("");
  const [mealsData, setMealsData] = useState([]);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  async function searchMeal(term) {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
    );
    const { meals } = await res.json();
    console.log(meals);
    setMealsData(meals);
  }

  console.log(search);
  return (
    <div>
      <h1>Search a recipe by name</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchMeal(search);
        }}
      >
        <input
          type="text"
          placeholder="Enter a dish or ingredient"
          onChange={handleChange}
          required
        />
        <button>Submit</button>
      </form>
      {mealsData && <Results meals={mealsData} />}
    </div>
  );
};

export default Search;
