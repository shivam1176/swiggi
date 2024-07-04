const ItemList=({items})=>{
// console.log(items);

return <div>
    <div>
        {items.map((item) =>(
            <div key={item.card.info.id} className="p-2 m-2 border-b-2 text-left flex justify-between">
               
                <div className="w-9/12">
                    <div className="p-2">
                    <span> {item.card.info.name}</span>
                    <span> -💸 {item.card.info.price? item.card.info.price/100 :item.card.info.defaultPrice/100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4">
                <div className="absolute"><button className="p-2  rounded-lg bg-black text-white">Add +</button></div>
                    <img className="" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ item.card.info.imageId}/>
                    
                </div>
            </div>
            ))}
    </div>

    </div>
}
export default  ItemList;