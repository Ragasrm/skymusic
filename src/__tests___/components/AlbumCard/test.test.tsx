import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import AlbumCard from '../../../components/Albums/AlbumCard/AlbumCard';
import rootReducer from '../../../redux/reducers';
import { Action, ActionType, Album, State } from '../../../types/reducers';


describe('nothing', () => {

    let store: Store<State, Action>;
    beforeEach(() => {
        store = createStore(rootReducer);
        
    })
    const album:Album = {
        id: "123564",
        img: "test.jpg",
        category: "Rock",
        isFavorite: false,
        name: "Test Album",
        price: "$10",
        year: 2022,
        artist: {name: "Test Artist", url: "test.com"},
        albumUrl: "testalbum.com"
      };

       test('Verify correct rendering of album information', () => {
      
        const { getByTestId, getByText } = render(<Provider store={store}>
            <AlbumCard album={album} />
        </Provider>);
        
        expect(getByTestId('album-name')).toHaveTextContent('Test Album');
        expect(getByText('Test Artist')).toBeInTheDocument();
        expect(getByText('Rock')).toBeInTheDocument();
        expect(getByText('2022')).toBeInTheDocument();
        expect(getByText('$10')).toBeInTheDocument();
      });

test('Verify that clicking on the artist name opens the artist URL in a new tab', () => {
  const dispatch = jest.fn();
  (dispatch as jest.Mock).mockReturnValue(dispatch);

  const { getByTestId } = render(<Provider store={store}>
    <AlbumCard album={album} />
</Provider>);
  const open = jest.spyOn(window, 'open').mockImplementation();
  const artist = getByTestId('artist-name');

  fireEvent.click(artist);

  expect(open).toHaveBeenCalledWith('test.com', '_blank');
});
});

