
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "./useReataurentMenu";

const RestaurentMenu = () => {
  const { resId } = useParams();
const resInfo = useRestaurentMenu(resId);

  useEffect(() => {
    if (resInfo) {
      console.log(JSON.stringify(resInfo, null, 2));
    }
  }, [resInfo]);

  if (resInfo === null) return <Shimmer />;

  const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;

  if (!itemCards) {
    console.warn("Item cards are not available");
    return <div>No items available</div>;
  }

  return (
    <div className="menu">
      <h1>{resInfo?.cards?.[2]?.card?.card?.info?.name}</h1>
      <h1>{resInfo?.cards?.[2]?.card?.card?.info?.cuisines.join(",")}</h1>
      <h1>{resInfo?.cards?.[2]?.card?.card?.info?.costForTwo}</h1>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}
            {" Rs:-  "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;







