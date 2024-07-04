
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "./useReataurentMenu";
import RestaurentCategory from "./RestaurentCategory";
const RestaurentMenu = () => {
  const { resId } = useParams();
const resInfo = useRestaurentMenu(resId);

  // useEffect(() => {
  //   if (resInfo) {
  //     console.log(JSON.stringify(resInfo, null, 2));
  //   }
  // }, [resInfo]);

  if (resInfo === null) return <Shimmer />;

  const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;

 const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

 if (!itemCards) {
    console.warn("Item cards are not available");
    return <div>No items available</div>;
  }

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{resInfo?.cards?.[2]?.card?.card?.info?.name}</h1>
      <p className="font-bold text-lg">{resInfo?.cards?.[2]?.card?.card?.info?.cuisines.join(",")} -💵{resInfo?.cards?.[2]?.card?.card?.info?.costForTwo /100}</p>
       {categories.map((category,index)=>{
        return <RestaurentCategory 
       key={category?.card?.card.title}
       data={category?.card?.card}
     
       />

})}

      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}
            {" Rs:-  "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurentMenu;







