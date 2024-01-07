import { configureStore } from "@reduxjs/toolkit";
import { ThemeReducer } from "./ThemeReducer";

const store = configureStore({
    reducer: ThemeReducer
})

export default store;