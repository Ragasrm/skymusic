import { Action, ActionType, Album } from "../../types/reducers";

const initialState: Album[] = [];

export const albumReducer=(state:Album[] = initialState, action:Action) => {
    switch (action.type) {
        case ActionType.SET_ALBUMS:
            return [
                ...action.payload,
            ];
        case ActionType.UPDATE_ALBUM:
            const UPDATED_ALBUM = state.map(album=> {
                if(album.id === action.payload.id) {
                  return  action.payload
                } else {
                    return album
                }
            })
            return UPDATED_ALBUM


    
        default:
            return [...state]
        
    }
}