import { Action, ActionType, AlbumReducerState } from "../../types/reducers";

const initialState: AlbumReducerState = {
    albums: []
}

export const albumReducer=(state:AlbumReducerState = initialState, action:Action): AlbumReducerState => {
    switch (action.type) {
        case ActionType.SET_ALBUMS:
            return {
                ...state,
                albums:action.payload
            };
            
    
        default:
            return {...state}
        
    }
}