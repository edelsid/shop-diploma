import { createSlice } from "@reduxjs/toolkit";

const purchases = localStorage.getItem('purchases') != null ? 
JSON.parse(localStorage.getItem('purchases')) : [];
const total = localStorage.getItem('total') != null ? 
JSON.parse(localStorage.getItem('total')) : 0;

const setStorage = (item, total) => {
   localStorage.setItem('purchases', JSON.stringify(item));
   localStorage.setItem('total', JSON.stringify(total))
}

const cart = createSlice({
   name: 'cartData',
   initialState: {
      purchases,
      total,
   },
   reducers: {
      addAction (state, action) {
         const { order } = action.payload;
         const alreadyInCart = state.purchases.find((item) => item.id === order.id);
         if (alreadyInCart) {
            alreadyInCart.count += order.count;
         } else {
            state.purchases.push(order);
         }
         state.total += (order.price * order.count);
         setStorage(state.purchases.map((item) => item), state.total);
      },
      removeAction (state, action) {
         const { order } = action.payload;
         state.purchases = state.purchases.filter(item => item.id !== order.id);
         state.total -= (order.price * order.count);
         setStorage(state.purchases.map((item) => item), state.total);
      },
      clearAll (state) {
         state.purchases = [];
         state.total = 0;
      }
   }
});

export const { addAction, removeAction, clearAll } = cart.actions;
export default cart.reducer;