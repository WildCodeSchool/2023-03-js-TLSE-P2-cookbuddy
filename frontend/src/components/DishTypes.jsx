import React from "react";
import "../styles/App.scss";
import "../styles/components/DishTypes.scss";
import BreakFast from "../assets/dish_types_svg/breakfast.svg";
import Snacks from "../assets/dish_types_svg/sandwich.svg";
import Brunch from "../assets/dish_types_svg/pancakes.svg";
import Tea from "../assets/dish_types_svg/tea.svg";
import Server from "../assets/dish_types_svg/server.svg";

export default function DishTypes() {
  return (
    <div className="dish-container">
      <h2>Dish Types</h2>
      <div className="dish-types-container">
        <div className="dish-types">
          <div className="btntxt">
            <button type="submit">
              <img src={BreakFast} alt="Breakfast" />
              <p>Breakfast</p>
            </button>
            <p className="mbltxt">Breakfast</p>
          </div>
          <div className="btntxt">
            <button type="submit">
              <img src={Snacks} alt="Snacks" />
              <p className="dsktxt">Snacks</p>
            </button>
            <p className="mbltxt">Snacks</p>
          </div>
          <div className="btntxt">
            <button type="submit">
              <img src={Brunch} alt="Brunch" />
              <p className="dsktxt">Brunch</p>
            </button>
            <p className="mbltxt">Brunch</p>
          </div>
          <div className="btntxt">
            <button type="submit">
              <img src={Tea} alt="Tea" />
              <p className="dsktxt">Teatime</p>
            </button>
            <p className="mbltxt">Teatime</p>
          </div>
          <div className="btntxt">
            <button type="submit">
              <img src={Server} alt="Lunch/Dinner" />
              <p className="dsktxt">Lunch/Dinner</p>
            </button>
            <p className="mbltxt">Lunch/Dinner</p>
          </div>
        </div>
      </div>
    </div>
  );
}
