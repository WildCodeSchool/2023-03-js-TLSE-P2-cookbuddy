import PropTypes from "prop-types";
import "../styles/components/RecipeCard.scss";
import "../styles/App.scss";

export default function RecipeCard({ data }) {
  const caloriesRounded = Math.round(data.calories);

  return (
    <article className="recipe-card">
      <div className="thumbnail">
        <img src={data.image} alt={data.label} />
      </div>
      <div className="details">
        <h3>{data.label}</h3>
        <ul className="recipe-infos">
          <li className="meal-type">
            <i className="bi bi-bookmark-fill" />
            {data.mealType.length > 1
              ? data.mealType.join(", ")
              : data.mealType}
          </li>
          <li>
            <i className="bi bi-clock-history" />
            {data.totalTime} mins
          </li>
          <li>
            <i className="bi bi-fire" />
            {caloriesRounded} calories
          </li>
        </ul>
        <button type="button">See the recipe</button>
      </div>
    </article>
  );
}
RecipeCard.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    mealType: PropTypes.arrayOf(PropTypes.string).isRequired,
    totalTime: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }).isRequired,
};
