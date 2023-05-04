import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/components/RecipesList.scss";
import RecipeCard from "./RecipeCard";

export default function RecipesList({
  data,
  listClass = "home",
  setIsBodyScrollable,
}) {
  const [filter, setFilter] = useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  let dataSorted;
  switch (true) {
    case filter === "kcal-asc":
      dataSorted = data.sort((a, b) => {
        return a.recipe.calories - b.recipe.calories;
      });
      break;
    case filter === "kcal-desc":
      dataSorted = data.sort((a, b) => {
        return b.recipe.calories - a.recipe.calories;
      });
      break;
    case filter === "cooktime-asc":
      dataSorted = data.sort((a, b) => {
        return a.recipe.totalTime - b.recipe.totalTime;
      });
      break;
    case filter === "cooktime-desc":
      dataSorted = data.sort((a, b) => {
        return b.recipe.totalTime - a.recipe.totalTime;
      });
      break;
    default:
      dataSorted = data;
      break;
  }

  return (
    <div className="recipe-list-container">
      {listClass !== "home" && (
        <div className="input-dropdown">
          <label htmlFor="select">Sort by :</label>
          <select
            name="select"
            className="drop-menu"
            onChange={handleChange}
            defaultValue="default"
          >
            <option value="default" disabled>
              Choose sorting
            </option>
            <option value="kcal-asc">Kcal: Low to High</option>
            <option value="kcal-desc">Kcal: High to Low</option>
            <option value="cooktime-asc">Cooking time: Low to High</option>
            <option value="cooktime-desc">Cooking time: High to Low</option>
          </select>
        </div>
      )}
      <div className={`recipe-list ${listClass}`}>
        {dataSorted.map((recipe) => (
          <RecipeCard data={recipe.recipe} key={recipe.recipe.url} setIsBodyScrollable={setIsBodyScrollable} />
        ))}
      </div>
    </div>
  );
}
RecipesList.propTypes = {
  listClass: PropTypes.string,
  setIsBodyScrollable: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      recipe: PropTypes.shape({
        label: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        mealType: PropTypes.arrayOf(PropTypes.string).isRequired,
        totalTime: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

RecipesList.defaultProps = {
  listClass: "home",
};
