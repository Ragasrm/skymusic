import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ActionType } from "../../types/reducers";
import {Switch, Route } from "react-router-dom";
import './Content.css'
import TopAlbums from "../Albums/TopAlbums";
import Favorites from "../Albums/Favorites";
import NoDataFound from "../Albums/NoDataFound";

type Props = {}

function Content(props: Props) {

  let categories: string[] = [];
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    // setTimeout(()=>{

      fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
      .then(response => response.json())
      .then((res) => {
        setIsLoading(false)

        let albumData = res.feed.entry.map((data: any) => {
          if (!categories.includes(data.category.attributes.label)) {
            categories.push(data.category.attributes.label)
          }

          return {
            category: data.category.attributes.label,
            id: data.id.attributes['im:id'],
            artist: {
              name: data['im:artist'].label,
              url: data['im:artist'].attributes?.href
            },
            albumUrl:data['link'].attributes?.href,
            img: data['im:image'][2].label,
            name: data['im:name'].label,
            price: data['im:price'].label,
            year: new Date(data['im:releaseDate'].label).getFullYear(),
            isFavorite: false
          }
        })

        dispatch({ type: ActionType.SET_ALBUMS, payload: albumData })
        dispatch({ type: ActionType.SET_CATEGORIES, payload: categories })



      })
      .catch(error => {
        console.log(error)
      });

    // },5000)  

   
  }, [dispatch])
  return (
    <div className="main">
      <Switch>


      
        <Route exact path="/" 
        // component={TopAlbums} 
        render={()=>(<TopAlbums isLoading={isLoading}><NoDataFound/></TopAlbums>)} />
        <Route path="/about"
        render={()=>(<Favorites isLoading={isLoading}><NoDataFound/></Favorites>)}
        
        />
        
      </Switch>
      {/* <Albums /> */}
    </div>

  )
}

export default Content