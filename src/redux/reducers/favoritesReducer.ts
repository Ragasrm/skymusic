import { Action, ActionType, Album, FavoriteAlbum } from "../../types/reducers";

const initialState: Album[] = [];

export const favoritesReducer=(state:FavoriteAlbum[] = initialState, action:Action) => {
    switch (action.type) {
        case ActionType.ADD_TO_FAVORITES:
            return [
                ...state,
                action.payload
            ];
        case ActionType.REMOVE_FROM_FAVORITES:
            return state.filter(album=> album.id !== action.payload.id)
        default:
            return [...state]
    }
}