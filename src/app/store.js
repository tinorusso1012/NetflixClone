import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import  userReducer from "../features/UserSlice.js"
import  priceReducer from "../features/PriceSlice.js"
export default configureStore({ reducer: {user: userReducer,price: priceReducer,} });
