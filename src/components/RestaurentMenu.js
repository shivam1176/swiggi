
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  console.log(resId);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.2668695&lng=75.70225669999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await data.json();
      console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, [resId]);

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







