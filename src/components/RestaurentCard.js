
const RestaurentCard =(props)=>{
  

const styleCard={
    backgroundColor:"#f0f0f0",
  }
    const{resData}= props;
    console.log(props);
    const {cloudinaryImageId,name,cuisines,avgRatingString,sla} =resData?.info;
    return(
      <div className="res-card" style={styleCard}>
        <img className="res-logo"
        alt="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}/>
         <h3>{name}</h3>
         <h4>{cuisines.join(", ")} </h4>
         <h4>{avgRatingString} stars </h4>
         <h4>{sla.slaString}  </h4>
        
      </div>
    )
  }
  
  export default RestaurentCard;