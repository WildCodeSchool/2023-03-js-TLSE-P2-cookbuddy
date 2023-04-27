import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import RecipesList from "../components/RecipesList";

export default function Search() {
  const [recipesData, setRecipesData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const apiURLtable = [
    "https://api.edamam.com/api/recipes/v2?type=public&imageSize=LARGE&random=true",
  ];
  apiURLtable.push(`app_id=${import.meta.env.VITE_APP_ID_CF}`);
  apiURLtable.push(`app_key=${import.meta.env.VITE_APP_KEY_CF}`);

  const params = [];
  let entry = null;
  for (entry of searchParams.entries()) {
    params.push(entry);
  }
  let hasTime = false;
  for (let i = 0; i < params.length; i += 1) {
    if (params[i][0] === "time") {
      hasTime = true;
    }
  }

  // const totalParams = params.length;

  if (!hasTime) {
    params.push(["time", "1%2B"]);
  }

  const paramsList = [];

  for (let i = 0; i < params.length; i += 1) {
    paramsList.push(params[i].join("="));
  }
  apiURLtable.push(`${paramsList.join("&")}`);

  const apiURL = apiURLtable.join("&");

  useEffect(() => {
    const getRecipesData = () => {
      axios.get(apiURL).then((response) => {
        setRecipesData(response.data.hits);
        setSearchParams(searchParams);
        setIsLoaded(true);
      });
    };
    getRecipesData();
  }, []);

  return (
    <>
      <nav>
        <p>CookBuddy</p>
      </nav>
      <main>
        <div className="container">
          {isLoaded ? (
            <RecipesList data={recipesData} listClass="home" />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
