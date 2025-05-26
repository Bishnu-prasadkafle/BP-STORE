// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cartItems: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       const item = action.payload;
//       const existingItem = state.cartItems.find((i) => i.id === item.id);
//       if (existingItem) {
//         existingItem.quantity += item.quantity;
//       } else {
//         state.cartItems.push({ ...item });
//       }
//     },
//     removeFromCart(state, action) {
//       state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
//     },
//     updateQuantity(state, action) {
//       const { id, quantity } = action.payload;
//       const item = state.cartItems.find((i) => i.id === id);
//       if (item && quantity > 0) {
//         item.quantity = quantity;
//       }
//     },
//   },
// });

// export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
// export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cartItems: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       const item = action.payload;
//       const existingItem = state.cartItems.find((i) => i.id === item.id);
//       if (existingItem) {
//         existingItem.quantity += item.quantity;
//       } else {
//         state.cartItems.push({ ...item });
//       }
//     },
//     removeFromCart(state, action) {
//       state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
//     },
//     updateQuantity(state, action) {
//       const { id, quantity } = action.payload;
//       const item = state.cartItems.find((i) => i.id === id);
//       if (item && quantity > 0) {
//         item.quantity = quantity;
//       }
//     },
//     clearCart(state) {
//       state.cartItems = [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, updateQuantity, clearCart } =
//   cartSlice.actions;

// export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.cartItems.push({ ...item });
      }
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((i) => i.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
