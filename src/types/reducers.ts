export type State = AlbumReducerState & FavoritesReducerState & CategoryReducerState

export type Album = {
    category:string,
    id:string,
    artist:Artist,
    img:string,
    name:string,
    price:string,
    year:number,
    isFavorite:boolean

};

type Artist = {
    name:string,
    url:string,
};
export type AlbumReducerState = {
    albums:Album[]
};

export type FavoritesReducerState = {
    favorites:Album[]
};

export type CategoryReducerState = {
    categories:string[] 
};


export enum ActionType {
    SET_ALBUMS='SET_ALBUMS',
    UPDATE_ALBUM='UPDATE_ALBUM',
    ADD_TO_FAVORITES='ADD_TO_FAVORITES',
    REMOVE_FROM_FAVORITES='REMOVE_FROM_FAVORITES',
    SET_CATEGORIES='SET_CATEGORIES'

}

export type Action = {
   type:ActionType,
   payload?:any
} 