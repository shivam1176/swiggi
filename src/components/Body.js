import RestaurentCard  from "./RestaurentCard";
// ,{withPromtedLabel}
import {useState,useEffect} from "react";   
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus"

const Body=()=>{
  const [listOFRes,setreslist] = useState([]);
  const [searchText,setSearchText] = useState("");
  // const RestaurentCardPromoted = withPromtedLabel(RestaurentCard);
  const fetchData= async()=>{

      const data = await fetch(
       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.2668695&lng=75.70225669999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
        const json = await data.json();
        // console.log(json);
        setreslist(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);    
  }

   useEffect(()=>{
    fetchData();
   },[]);

   const onlineStatus = useOnlineStatus();
   if(onlineStatus === false) return <h1>looks like you are offline</h1>

   if(listOFRes.length ===0) return <Shimmer/>;
  return (
      <div className="body">
        <div className="filter">
              <div className="search">
                <input type="text" 
                className="search-box" 
                value={searchText} 
                onChange={(e)=>{setSearchText(e.target.value)}}
                />

                  <button onClick={()=>{
                        // console.log(searchText);
                      const filteredRes= listOFRes.filter(
                        (res)=>res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                      );
                      setreslist(filteredRes);
                      }}
                  >search

                  </button>

              </div>

                <button className="filter-btn" 
                  onClick={()=>{ 
                    const filteredList =listOFRes
                    .filter((res)=>res.info.avgRating > 4 );
                    setreslist(filteredList);
                  }}
                >top rated resturents
                </button>

        </div>
        <div className="res-container">
            {  
            listOFRes.map((rest)=>(
            <Link 
              key="rest.info.id" 
              to={"/restaurents/"+rest.info.id}>
                {/* rest.info.promoted ? <RestaurentCardPromoted resData={rest}/>:  */}
                <RestaurentCard resData={rest}/>
                    
                  
              </Link>
            ))
          }
        </div>
      </div>
    ) 
  }
  export default Body;