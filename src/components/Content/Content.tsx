import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import TopAlbums from "../Albums/TopAlbums";
import Favorites from "../Albums/Favorites";
import NoDataFound from "../Albums/NoDataFound";
import { ActionType } from "../../types/reducers";
import './Content.css';

type ContentProps = {};

function Content(props: ContentProps) {
  const URL = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';
  let categories: string[] = [];
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    /******************************************************
     * TODO: API call should be in service file in seperate
     * * This Task has only API call So made it here.
     * ****************************************************/
    fetch(URL)
      .then(response => response.json())
      .then((res) => {
        setIsLoading(false)
        let albumData = res.feed.entry.map((data: any) => {
          if (!categories.includes(data.category.attributes.label)) {
            categories.push(data.category.attributes.label)
          };

          /****************************************************
           * * Preparing data from API response to application
          *****************************************************/
          const category = data?.category?.attributes?.label || "";
          const id = data?.id?.attributes['im:id'] || "";
          const artist = {
            name: data['im:artist']?.label || "",
            url: data['im:artist'].attributes?.href || "",
          };
          const albumUrl = data['link']?.attributes?.href || "";
          const img = data['im:image'][2]?.label || "";
          const name = data['im:name']?.label || "";
          const price = data['im:price']?.label || "";
          const year = data['im:releaseDate']?.label ? new Date(data['im:releaseDate'].label).getFullYear() : ""

          return {
            category,
            id,
            artist,
            albumUrl,
            img,
            name,
            price,
            year,
            isFavorite: false
          };
        });
        /******************************************************************
         * * SET_ALBUMS & SET_CATEGORIES & etc are actions should be handled 
         * * in seperate action file, I made it in simple way for this task. 
         * *****************************************************************/
        dispatch({ type: ActionType.SET_ALBUMS, payload: albumData });
        dispatch({ type: ActionType.SET_CATEGORIES, payload: categories });
      })
      .catch(error => {
        // error should be handle to notify user
        console.log(error)
      });

  }, [dispatch]);

  return (
    <div className="main">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (<TopAlbums isLoading={isLoading}><NoDataFound /></TopAlbums>)}
        />
        <Route path="/favorites"
          render={() => (<Favorites isLoading={isLoading}><NoDataFound /></Favorites>)}
        />
      </Switch>
    </div>

  )
}

export default Content