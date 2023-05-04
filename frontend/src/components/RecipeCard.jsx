import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/components/RecipeCard.scss";
import RecipeDetails from "./RecipeDetails";

export default function RecipeCard({ data, setIsBodyScrollable }) {
  const caloriesRounded = Math.round(data.calories);
  const [areRecipeDetailsVisible, setAreRecipeDetailsVisible] = useState(false);
  const openRecipeDetails = () => {
    setAreRecipeDetailsVisible(true);
    setIsBodyScrollable(false);
  };
  const closeRecipeDetails = () => {
    setAreRecipeDetailsVisible(false);
    setIsBodyScrollable(true);
  };

  return (
    <>
      <article className="recipe-card" onClick={openRecipeDetails} aria-hidden>
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
      {areRecipeDetailsVisible ? (
        <RecipeDetails
          data={data}
          setAreRecipeDetailsVisible={closeRecipeDetails}
          setIsBodyScrollable={setIsBodyScrollable}
        />
      ) : (
        ""
      )}
    </>
  );
}
RecipeCard.propTypes = {
  setIsBodyScrollable: PropTypes.func.isRequired,
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    mealType: PropTypes.arrayOf(PropTypes.string).isRequired,
    totalTime: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }).isRequired,
};
