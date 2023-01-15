import { Action, ActionType, Album } from "../../types/reducers";

const initialState: Album[] = [];

export const albumReducer=(state:Album[] = initialState, action:Action) => {
    switch (action.type) {
        case ActionType.SET_ALBUMS:
            return [
                ...action.payload,
            ];

    
        default:
            return [...state]
        
    }
}