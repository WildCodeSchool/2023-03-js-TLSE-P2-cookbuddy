import PropTypes from "prop-types";

function RecipePageButton({ data }) {
  return (
    <a href={data} target="_blank" rel="noopener noreferrer">
      <button
        className="action-button--xl action-button--full recipe-instructions"
        type="button"
      >
        Discover the instructions <i className="bi bi-box-arrow-up-right" />
      </button>
    </a>
  );
}

RecipePageButton.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipePageButton;
