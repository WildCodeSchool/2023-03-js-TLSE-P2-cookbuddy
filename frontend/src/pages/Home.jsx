import axios from "axios";
import { useState, useEffect } from "react";
import RecipesList from "../components/RecipesList";

export default function Home() {
  const [recipesData, setRecipesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const today = new Date();
  const time = today.getHours();

  let mealSearchType;
  if (time > 0 && time <= 10) {
    mealSearchType = "Breakfast";
  } else if (time > 10 && time <= 14) {
    mealSearchType = "Lunch";
  } else if (time > 14 && time <= 16) {
    mealSearchType = "Teatime";
  } else if (time > 16 && time <= 18) {
    mealSearchType = "Snack";
  } else if (time > 18 && time <= 22) {
    mealSearchType = "Dinner";
  } else {
    mealSearchType = "Lunch";
  }

  useEffect(() => {
    const getRecipesData = () => {
      axios
        .get(
          `https://api.edamam.com/api/recipes/v2?type=public&app_id=${
            import.meta.env.VITE_APP_ID_CF
          }&app_key=${
            import.meta.env.VITE_APP_KEY_CF
          }&mealType=${mealSearchType}&time=1%2B&imageSize=LARGE&random=true`
        )
        .then((response) => {
          setRecipesData(response.data.hits.splice(0, 6));
          setIsLoading(true);
        });
    };
    getRecipesData();
  }, []);

  return (
    <>
      <header>
        <p>CookBuddy</p>
      </header>
      <main>
        <div className="container">
          <section id="chef-suggestion">
            {isLoading ? (
              <RecipesList data={recipesData} listClass="home" />
            ) : (
              <p>Loading...</p>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
