import "../styles/components/RecipeDetails.scss";
import PropTypes from "prop-types";

function RecipeDetails({ data }) {
  function numberRounded(num) {
    return Math.round(num);
  }
  return (
    <div className="recipe-details">
      <button className="close" type="button">
        <i className="bi bi-x-lg" />
      </button>
      <div className="thumbnail">
        <img src={data.image} alt="Recipe illustration" />
      </div>
      <div className="recipe-description">
        <h2>{data.label}</h2>
        <div>
          <p>
            <i className="bi bi-fire" />{" "}
            {numberRounded(data.totalNutrients.ENERC_KCAL.quantity)}{" "}
            {data.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>
            <i className="bi bi-bookmarks-fill" /> {data.mealType}
          </p>
          <p>
            <i className="bi bi-clock-history" /> {data.totalTime}
          </p>
        </div>
        <div>
          <article>
            {data.totalNutrients.FAT.label}{" "}
            {numberRounded(data.totalNutrients.FAT.quantity)}
            {data.totalNutrients.PROCNT.unit}
          </article>
          <article>
            {data.totalNutrients.PROCNT.label}{" "}
            {numberRounded(data.totalNutrients.PROCNT.quantity)}
            {data.totalNutrients.PROCNT.unit}
          </article>
          <article>
            {data.totalNutrients.CHOCDF.label}{" "}
            {numberRounded(data.totalNutrients.CHOCDF.quantity)}
            {data.totalNutrients.PROCNT.unit}
          </article>
          <article>
            {data.totalNutrients.FIBTG.label}{" "}
            {numberRounded(data.totalNutrients.FIBTG.quantity)}
            {data.totalNutrients.PROCNT.unit}
          </article>
        </div>
        <h2>Ingredients</h2>
        <ul>
          {data.ingredients.map((ingredient) => (
            <li>
              {ingredient.quantity} {ingredient.measure} {ingredient.food}
            </li>
          ))}
        </ul>
      </div>
      <button className="action-button--xl action-button--full" type="button">
        Discover the instructions <i className="bi bi-box-arrow-up-right" />
      </button>
    </div>
  );
}

RecipeDetails.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    mealType: PropTypes.string.isRequired,
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
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};
export default RecipeDetails;
