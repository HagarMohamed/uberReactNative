import { configureStore } from "@reduxjs/toolkit"
import navReducer from "./reducers/navReducer"

export const store = configureStore({
    reducer: {
        nav:navReducer,
    }
})