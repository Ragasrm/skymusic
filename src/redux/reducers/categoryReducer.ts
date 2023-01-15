import { Action, ActionType } from "../../types/reducers";

const initialState: string[] = [];

export const categoryReducer = (state:string[] = initialState, action:Action) => {
    switch (action.type) {
        case ActionType.SET_CATEGORIES:
            return [
                ...action.payload,
            ];
            
    
        default:
            return [...state]
        
    }

}