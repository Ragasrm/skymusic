import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ActionType } from "../../types/reducers";
import Albums from "../Albums/Albums";
import './Content.css'

type Props = {}

function Content(props: Props) {

  let categories: string[] = [];
  const dispatch = useDispatch();

  useEffect(() => {

    fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
      .then(response => response.json())
      .then((res) => {
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
  }, [dispatch])
  return (
    <div className="main">
      <Albums />
    </div>

  )
}

export default Content