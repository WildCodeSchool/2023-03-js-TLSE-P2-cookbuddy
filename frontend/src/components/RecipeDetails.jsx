import "../styles/components/RecipeDetails.scss";
import PropTypes from "prop-types";

function RecipeDetails({ data }) {
  function numberRounded(num) {
    return Math.round(num);
  }
  function truncateNumber(num) {
    return Number.isInteger(num) ? num.toString() : num.toFixed(2);
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
          <div className="recipe-nutrients">
            <p>
              {data.totalNutrients.FAT.label}{" "}
              {numberRounded(data.totalNutrients.FAT.quantity)}
              {data.totalNutrients.PROCNT.unit}
            </p>
            <p>
              {data.totalNutrients.PROCNT.label}{" "}
              {numberRounded(data.totalNutrients.PROCNT.quantity)}
              {data.totalNutrients.PROCNT.unit}
            </p>
            <p>
              {data.totalNutrients.CHOCDF.label}{" "}
              {numberRounded(data.totalNutrients.CHOCDF.quantity)}
              {data.totalNutrients.PROCNT.unit}
            </p>
            <p>
              {data.totalNutrients.FIBTG.label}{" "}
              {numberRounded(data.totalNutrients.FIBTG.quantity)}
              {data.totalNutrients.PROCNT.unit}
            </p>
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
              <li key={ingredient.id}>
                <div className="input-checkbox input-checkbox--md">
                  <label htmlFor={ingredient.id}>
                    <input
                      className="checkmark"
                      type="checkbox"
                      id={ingredient.id}
                      name={ingredient.food}
                    />
                    <div className="checkbox" />
                    {truncateNumber(ingredient.quantity)}{" "}
                    {ingredient.measure !== "<unit>" ? ingredient.measure : ""}{" "}
                    {ingredient.food}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button className="action-button--xl action-button--full" type="button">
          Discover the instructions <i className="bi bi-box-arrow-up-right" />
        </button>
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
