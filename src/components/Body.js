import RestaurentCard from "./RestaurentCard";
import {useState,useEffect} from "react";   
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body=()=>{
  // const [listOFRes,setreslist] = useState(resList);
  const [listOFRes,setreslist] = useState([]);

  const [searchText,setSearchText] = useState("")
   useEffect(()=>{
    fetchData();
     console.log("useEffect called");  
   },[]);
   const fetchData= async()=>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.2668695&lng=75.70225669999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setreslist(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants); 
   }

   if(listOFRes.length ===0){
    // return <h1>loading.....</h1>;
    return <Shimmer/>;
   }
    return (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
              <button onClick={()=>{

                console.log(searchText);
               const filteredRes= listOFRes.filter(
                (res)=>res.info.name.includes(searchText)
              );
               setreslist(filteredRes);
              }}
              >
                search
              </button>
          </div>
            <button className="filter-btn" 
              onClick={()=>{ 
                
                const filteredList =listOFRes.filter(
                    (res)=>res.info.avgRating >4               
                 );
                 setreslist(filteredList);
                  }}>top rated resturents
            </button>
        </div>
        <div className="res-container">
          {  
            listOFRes.map((rest)=><RestaurentCard  resData={rest}/>)
          }
          {/* <RestaurentCard resData={resData[1]}/>
         
          <RestaurentCard resData={resData[0]}/> */}
        </div>
      </div>
    )
  }
  export default Body;