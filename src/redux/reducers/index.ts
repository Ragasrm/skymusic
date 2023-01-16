import { combineReducers } from "redux";
import { albumReducer } from "./albumReducer";
import { categoryReducer } from "./categoryReducer";
import { favoritesReducer } from "./favoritesReducer";



const rootReducer = combineReducers(
    {
        albums: albumReducer,
        categories: categoryReducer,
        favorites: favoritesReducer
    }
)

export default rootReducer;