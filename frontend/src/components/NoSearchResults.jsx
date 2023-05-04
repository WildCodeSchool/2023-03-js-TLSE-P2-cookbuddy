import "../styles/components/NoSearchResults.scss";

function NoSearchResults() {
  return (
    <div className="no-search-results">
      <img
        className="logo"
        src="assets/logo/logo-not-found.svg"
        alt="logo Cook Buddy"
      />
      <h2>Oooopsie</h2>
      <p>
        No recipe found with this criteria.
        <br /> Try removing filters.
      </p>
    </div>
  );
}

export default NoSearchResults;
