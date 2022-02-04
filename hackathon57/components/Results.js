import styles from "../styles/Results.module.css";

function Results({ qoutes }) {
  return (
    <div className={styles.quotes}>
      {qoutes.map((qoute) => (
        <div key={qoute.idQoute} className={styles.qouteCard}>
          <h1 className={styles.qouteName}>{qoute.strMeal}</h1>
          <h3>Instructions: </h3>
          <p>{qoute.strInstructions}</p>
          <img src={qoute.strMealThumb} className={styles.img} />
        </div>
      ))}
    </div>
  );
}

export default Results;
