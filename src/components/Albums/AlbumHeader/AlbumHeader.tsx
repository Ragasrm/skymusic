import { Autocomplete, TextField } from '@mui/material'
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

  const handleFilter = (value:any) => {
    
    const FilterArray:string[] = value.map((data:any)=> FilterArray.push(data.title))

    onFilter(FilterArray)

    //
  };

    
  return (
    <div className='album-header'>
        <div className='title-container'>
            <p className='title'>Top 100 Albums</p>
            <p className='view-all' onClick={toggleViewAll}>
              {viewAll ? 'Show min': 'Show max'}</p>
        </div>
        <div className='filter-container'>
        <Autocomplete
        multiple
        id="tags-outlined"
        options={mappedCategories}
        getOptionLabel={(option) => option.title}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        // defaultValue={[top100Films[13]]}
        onChange={(event, value) => handleFilter(value)}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="filter by category"
            // placeholder="Favorites"
          />
        )}
      />
        </div>
    </div>
  )
}