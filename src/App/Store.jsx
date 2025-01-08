import { configureStore } from "@reduxjs/toolkit";
import UserReducerSlice from "../UserReducerSlice";
export const store =configureStore({
    reducer:{
        boy:UserReducerSlice,
    }
})