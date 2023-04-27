import PropTypes from "prop-types";

function IngredientListItem({ ingredient, initialYield, selectedYield }) {
  function truncateNumber(num) {
    return Number.isInteger(num) ? num.toString() : num.toFixed(2);
  }
  return (
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
          {ingredient.quantity === 0
            ? ""
            : truncateNumber(
                (ingredient.quantity / initialYield) * selectedYield
              )}{" "}
          {ingredient.measure !== "<unit>" ? ingredient.measure : ""}{" "}
          {ingredient.food}
        </label>
      </div>
    </li>
  );
}
IngredientListItem.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}.isRequired;

export default IngredientListItem;
