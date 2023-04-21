import PropTypes from "prop-types";

function RecipeNutrientFiber({ data }) {
  function numberRounded(num) {
    return Math.round(num);
  }
  return (
    <p>
      {data.label} {numberRounded(data.quantity)}
      {data.unit}
    </p>
  );
}
RecipeNutrientFiber.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
  }).isRequired,
};
export default RecipeNutrientFiber;
