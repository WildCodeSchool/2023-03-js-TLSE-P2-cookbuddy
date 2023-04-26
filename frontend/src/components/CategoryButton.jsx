import "../styles/components/CategoryButton.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CategoryButton({ button }) {
  return (
    <Link to={`/search?mealType=${button.searchQuery}`} className="btntxt">
      <button type="submit">
        <img src={button.src} alt={`${button.name} icon`} />
        <p>{button.name}</p>
      </button>
      <p className="mbltxt">{button.name}</p>
    </Link>
  );
}

CategoryButton.propTypes = {
  button: PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    searchQuery: PropTypes.string.isRequired,
  }).isRequired,
};
