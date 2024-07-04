import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = (data)=>{
    const [showItems,setShowItems] = useState(false);
    const handleClick =()=>{
        console.log("click")
        setShowItems(!showItems);

    }
    console.log(data);
    console.log(showItems);
    return (<div>
 
            <div className="w-6/12 mx-auto my-4 p-4  shadow-lg bg-gray-50">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            
                <span className="font-bold text-lg">{data?.data?.title}  ({data?.data?.itemCards.length})</span>
                <span>🔽</span>
            </div>

             {  showItems && <ItemList items={data.data.itemCards}/>}
            </div>
            {/* accordian */}
     
    </div>
    
);
 

};
export default RestaurentCategory;