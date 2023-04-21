import "../styles/components/RecipeDetails.scss";
import PropTypes from "prop-types";
import IngredientListItem from "./IngredientListItem";
import RecipeNutrient from "./RecipeNutrient";

function RecipeDetails({ data }) {
  function numberRounded(num) {
    return Math.round(num);
  }
  return (
    <div className="recipe-container">
      <div className="recipe-details">
        <button className="close" type="button">
          <i className="bi bi-x-lg" />
        </button>
        <div className="thumbnail">
          <img src={data.image} alt="Recipe illustration" />
        </div>
        <div className="recipe-description">
          <h2 className="recipe-label">{data.label}</h2>
          <div className="recipe-infos">
            <p>
              <i className="bi bi-fire" />{" "}
              {numberRounded(data.totalNutrients.ENERC_KCAL.quantity)}{" "}
              {data.totalNutrients.ENERC_KCAL.unit}
            </p>
            <p>
              <i className="bi bi-bookmarks-fill" /> {data.mealType}
            </p>
            <p>
              <i className="bi bi-clock-history" /> {data.totalTime} minutes
            </p>
            <p>
              <i className="bi bi-globe-americas" /> {data.cuisineType}
            </p>
          </div>
          <div className="recipe-nutrients-container">
            <h2>Nutrition</h2>
            <div className="recipe-nutrients">
              <RecipeNutrient data={data.totalNutrients.FAT} />
              <RecipeNutrient data={data.totalNutrients.PROCNT} />
              <RecipeNutrient data={data.totalNutrients.CHOCDF} />
              <RecipeNutrient data={data.totalNutrients.FIBTG} />
            </div>
          </div>
          <div className="ingredients-header">
            <h2 className="ingredients-title">Ingredients</h2>
            <div className="yield-selector">
              <button type="button" className="remove">
                <i className="bi bi-dash-lg" />
              </button>
              <input type="number" value={data.yield} />
              <button type="button" className="add">
                <i className="bi bi-plus-lg" />
              </button>
            </div>
          </div>
          <ul className="ingredients-list">
            {data.ingredients.map((ingredient) => (
              <IngredientListItem key={ingredient.id} ingredient={ingredient} />
            ))}
          </ul>
          <button
            className="action-button--xl action-button--full recipe-instructions"
            type="button"
          >
            Discover the instructions <i className="bi bi-box-arrow-up-right" />
          </button>
        </div>
      </div>
    </div>
  );
}

RecipeDetails.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    mealType: PropTypes.string.isRequired,
    cuisineType: PropTypes.string.isRequired,
    totalTime: PropTypes.number.isRequired,
    totalNutrients: PropTypes.shape({
      ENERC_KCAL: PropTypes.shape({
        label: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        unit: PropTypes.string.isRequired,
      }).isRequired,
      FAT: PropTypes.shape({
        label: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        unit: PropTypes.string.isRequired,
      }).isRequired,
      PROCNT: PropTypes.shape({
        label: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        unit: PropTypes.string.isRequired,
      }).isRequired,
      CHOCDF: PropTypes.shape({
        label: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        unit: PropTypes.string.isRequired,
      }).isRequired,
      FIBTG: PropTypes.shape({
        label: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        unit: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    yield: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};
export default RecipeDetails;
