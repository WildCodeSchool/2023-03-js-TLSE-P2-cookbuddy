import PropTypes from "prop-types";
import "../styles/components/RecipesList.scss";
import RecipeCard from "./RecipeCard";

export default function RecipesList({ data, listClass = "home" }) {
  return (
    <div className={`recipe-list ${listClass}`}>
      {data.map((recipe) => (
        <RecipeCard data={recipe.recipe} key={recipe.recipe.url} />
      ))}
    </div>
  );
}
RecipesList.propTypes = {
  listClass: PropTypes.string,
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
