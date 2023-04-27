import PropTypes from "prop-types";

function RecipeInfos({ data, mealType, cuisineType, totalTime }) {
  function numberRounded(num) {
    return Math.round(num);
  }
  return (
    <div className="recipe-infos">
      {[
        {
          icon: "bi bi-fire",
          text: `${numberRounded(data.quantity)} ${data.unit}`,
        },
        { icon: "bi bi-bookmarks-fill", text: mealType },
        { icon: "bi bi-clock-history", text: `${totalTime} minutes` },
        { icon: "bi bi-globe-americas", text: cuisineType },
      ].map((info) => (
        <p>
          <i className={info.icon} /> {info.text}
        </p>
      ))}
    </div>
  );
}

RecipeInfos.propTypes = {
  mealType: PropTypes.arrayOf(PropTypes.string).isRequired,
  cuisineType: PropTypes.string.isRequired,
  totalTime: PropTypes.number.isRequired,
  data: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeInfos;
