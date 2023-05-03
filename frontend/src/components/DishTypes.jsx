import React from "react";
import "../styles/App.scss";
import "../styles/components/DishTypes.scss";
import CategoryButton from "./CategoryButton";
import { categoryButtons } from "../utils";

export default function DishTypes() {
  return (
    <div className="dish-container">
      <h2>Dish types</h2>
      <div className="dish-types-container">
        <div className="dish-types">
          {categoryButtons.map((button) => (
            <CategoryButton key={button.id} button={button} />
          ))}
        </div>
      </div>
    </div>
  );
}
