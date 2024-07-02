import { useEffect,useState } from "react";

const useRestaurentMenu = (resId)=>{
 const [resInfo, setResInfo] = useState(null);
  const fetchMenu = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.2668695&lng=75.70225669999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await data.json();
      setResInfo(json.data); 
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

    useEffect(() => {
        fetchMenu();
      }, []);
    
    return resInfo;
}
export default useRestaurentMenu;