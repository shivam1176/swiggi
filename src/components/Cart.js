import { useDispatch, useSelector } from "react-redux";
import {clearCart} from "../utils/cartSlice";
import ItemList from "./ItemList";
// import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
   
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart())
    };
    return <div className="text-center m-4 p-4">
    <h1 className="text-4xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
        <button className="p-2 m-2 bg-black text-white rounded-lg" 
        onClick={handleClearCart}>
            clear cart
            </button>
            {cartItems.length === 0 && <h1> cart is empty  </h1>}
            <ItemList items={cartItems}/>
            
        </div>
    </div>

 
};
export default Cart;