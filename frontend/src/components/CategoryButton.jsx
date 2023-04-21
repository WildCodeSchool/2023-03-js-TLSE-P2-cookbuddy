import "../styles/components/CategoryButton.scss";
import PropTypes from "prop-types";

export default function CategoryButton({ button }) {
  return (
    <div className="btntxt">
      <button type="submit">
        <img src={button.src} alt={button.name} />
        <p>{button.name}</p>
      </button>
      <p className="mbltxt">{button.name}</p>
    </div>
  );
}

CategoryButton.propTypes = {
  button: PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
