import { HashLink } from "react-router-hash-link";
import bruschettaImage from "./assets/bruschetta.jpg";
import greekSaladImage from "./assets/greek-salad.jpg";
import lemonDessertImage from "./assets/lemon-dessert.jpeg";
import "./WeekSpecials.css";
import MealCard from "./MealCard";

const meals = [
  {
    name: "Greek Salad",
    image: greekSaladImage,
    price: "$10.00",
    description: `A beloved classic, this Greek salad combines crisp lettuce, fresh peppers, and briny olives, layered with our signature Chicago-style feta cheese. Finished with herb-seasoned croutons infused with garlic and rosemary for a satisfying crunch.`,
  },
  {
    name: "Bruschetta",
    image: bruschettaImage,
    price: "$6.79",
    description: `Our Bruschetta starts with artisanal bread, grilled to golden perfection, then rubbed with fresh garlic and finished with a drizzle of extra virgin olive oil and a pinch of sea salt.`,
  },
  {
    name: "Lemon Dessert",
    image: lemonDessertImage,
    price: "$8.50",
    description: `Inspired by grandma’s handwritten recipes, this dish stays loyal to its roots—each ingredient meticulously sourced to recreate the flavors of her kitchen.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials" id="menu">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <HashLink className="button-primary" to="/#menu">
          Online Menu
        </HashLink>
      </div>
      {meals.map((meal, index) => (
        <MealCard key={index} meal={meal} />
      ))}
    </section>
  );
};

export default WeekSpecials;
