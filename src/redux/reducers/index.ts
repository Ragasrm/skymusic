import { combineReducers } from "redux";
import { albumReducer } from "./albumReducer";
import { categoryReducer } from "./categoryReducer";



const rootReducer = combineReducers(
    {
        albums: albumReducer,
        categories: categoryReducer
    }
)

export default rootReducer;