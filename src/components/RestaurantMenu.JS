import React from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import ResaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log("main",categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6">{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
      <h3 className="font-bold text-lg">{resInfo?.cards[2]?.card?.card?.info.cuisines.join(", ")} - {resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}</h3>
      {categories.map((category)=>(
        <ResaurantCategory accordianData={category?.card?.card} />
      ))}

      </div>
  );
};

export default RestaurantMenu;
