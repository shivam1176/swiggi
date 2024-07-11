 import { createSlice } from "@reduxjs/toolkit";
// const initialState ={
//     items:[],
// }
const cartSlice = createSlice({
    name:'cart',
    initialState :{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },  
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length = 0;

        },
    },
});  

export const{addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     items: [],
// };

// console.log("Initial State: ", initialState);

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addItem: (state, action) => {
//             console.log("Add Item Action: ", action);
//             state.items.push(action.payload);
//         },
//         removeItem: (state) => {
//             console.log("Remove Item Action");
//             state.items.pop();
//         },
//         clearCart: (state) => {
//             console.log("Clear Cart Action");
//             state.items = [];
//         },
//     },
// });

// export const { addItem, removeItem, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;
