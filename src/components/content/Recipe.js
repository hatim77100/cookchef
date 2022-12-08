import styles from "./Recipe.module.scss";
import recipe from "../../assets/images/recette1.jpg"

function Recipe() {
    return(
        <div className={styles.recipe}>
            <div className={styles.imageContainer}>
                <img src={recipe} alt="recipe" />
            </div>
            <div className={`d-flex justify-center flex-row align-center ${styles.recipeTitle}`}>
                <h3>Fleurs miracle</h3>
            </div>
        </div>
    );
}

export default Recipe;