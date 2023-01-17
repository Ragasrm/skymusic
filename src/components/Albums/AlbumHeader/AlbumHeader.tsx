import { Autocomplete, TextField } from '@mui/material'
import './AlbumHeader.css';

type AlbumHeaderProps = {
  categories: string[],
  title: string
  viewAll: boolean,
  onFilter: (categories: string[]) => void,
  toggleViewAll: () => void,

};

export default function AlbumHeader(props: AlbumHeaderProps) {

  const { categories, toggleViewAll, viewAll, onFilter, title } = props;

  const mappedCategories = categories?.map(category => ({ title: category })) || [];

  const handleFilter = (value: any) => {

    const FilterArray: string[] = value.map((data: any) => data.title)

    onFilter(FilterArray)

  };


  return (
    <div className='album-header'>
      <div className='title-container'>
        <p className='title'>{title}</p>
        <p className='view-all' onClick={toggleViewAll}>
          {viewAll ? 'Show min' : 'Show max'}</p>
      </div>
      <div className='filter-container'>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={mappedCategories}
          getOptionLabel={(option) => option.title}
          isOptionEqualToValue={(option, value) => option.title === value.title}
          onChange={(event, value) => handleFilter(value)}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="filter by category"
            />
          )}
        />
      </div>
    </div>
  );
};
