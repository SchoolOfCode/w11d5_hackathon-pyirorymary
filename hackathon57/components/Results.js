import styles from "../styles/Results.module.css";

function Results({ meals }) {
  return (
    <div className={styles.meals}>
      {meals.map((meal) => (
        <div key={meal.idMeal} className={styles.mealCard}>
          <h1 className={styles.mealName}>{meal.strMeal}</h1>
          <h3>Instructions: </h3>
          <p>{meal.strInstructions}</p>
          <img src={meal.strMealThumb} className={styles.img} />
        </div>
      ))}
    </div>
  );
}

export default Results;
