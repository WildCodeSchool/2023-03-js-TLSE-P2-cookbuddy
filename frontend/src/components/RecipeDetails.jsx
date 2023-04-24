import "../styles/components/RecipeDetails.scss";
import PropTypes from "prop-types";
import IngredientListItem from "./IngredientListItem";
import RecipeNutrient from "./RecipeNutrient";
import RecipePageButton from "./RecipePageButton";
import RecipeInfos from "./RecipeInfos";

function RecipeDetails({ data }) {
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
          <RecipeInfos
            data={data.totalNutrients.ENERC_KCAL}
            mealType={data.mealType}
            totalTime={data.totalTime}
            cuisineType={data.cuisineType}
          />
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
          <RecipePageButton data={data.url} />
        </div>
      </div>
    </div>
  );
}

RecipeDetails.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    mealType: PropTypes.arrayOf(PropTypes.string).isRequired,
    cuisineType: PropTypes.arrayOf(PropTypes.string).isRequired,
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
