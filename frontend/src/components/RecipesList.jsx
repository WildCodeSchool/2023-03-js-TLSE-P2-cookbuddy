import "../styles/components/RecipesList.scss";
import "../styles/App.scss";
import RecipeCard from "./RecipeCard";

export default function RecipesList({ data }) {
  return (
    <div className="recipe-list">
      <RecipeCard data={data[0].recipe} />
      <RecipeCard data={data[1].recipe} />
      <RecipeCard data={data[2].recipe} />
      <RecipeCard data={data[4].recipe} />
    </div>
  );
}
