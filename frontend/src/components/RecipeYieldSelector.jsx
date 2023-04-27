import PropTypes from "prop-types";

function RecipeYieldSelector({ selectedYield, setSelectedYield }) {
  function handleChange(event) {
    const value = parseInt(event.target.value, 10);
    setSelectedYield(value >= 1 ? value : "");
  }

  function handleIncrement() {
    setSelectedYield((selectedYield === "" ? 0 : selectedYield) + 1);
  }

  function handleDecrement() {
    if (selectedYield <= 1) return;
    setSelectedYield((selectedYield === "" ? 0 : selectedYield) - 1);
  }
  return (
    <div className="yield-selector">
      <button type="button" className="remove" onClick={handleDecrement}>
        <i className="bi bi-dash-lg" />
      </button>
      <input type="number" value={selectedYield} onChange={handleChange} />
      <button type="button" className="add" onClick={handleIncrement}>
        <i className="bi bi-plus-lg" />
      </button>
    </div>
  );
}
RecipeYieldSelector.propTypes = {
  selectedYield: PropTypes.number.isRequired,
  setSelectedYield: PropTypes.func.isRequired,
}.isRequired;
export default RecipeYieldSelector;
