import { Autocomplete, TextField } from '@mui/material'
import { title } from 'process'
import { useEffect } from 'react'
import './AlbumHeader.css'
type Props = {
  categories:string[],
  toggleViewAll:()=> void,
  viewAll:boolean,
  onFilter:(categories:string[])=>void
}

export default function AlbumHeader(props: Props) {

  const {categories, toggleViewAll, viewAll, onFilter} = props

  const mappedCategories = categories?.map(category=>({ title:category})) ||  [];

    
  return (
    <div className='album-header'>
        <div className='title-container'>
            <p className='title'>Top 100 Albums</p>
            <p className='view-all' onClick={toggleViewAll}>
              {viewAll ? 'Show min': 'Show max'}</p>
        </div>
        <div className='filter-container'>
          <button onClick={() => onFilter(['Rock', 'Fusion', 'Country'])}>Click</button>
        <Autocomplete
        multiple
        id="tags-outlined"
        options={mappedCategories}
        getOptionLabel={(option) => option.title}
        // defaultValue={[top100Films[13]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
      />
        </div>
    </div>
  )
}