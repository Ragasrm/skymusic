import { fireEvent, render, screen } from '@testing-library/react';
// import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import { Action, ActionType, Album, State } from '../../../types/reducers';
import * as reactRedux from 'react-redux'
import rootReducer from '../../../redux/reducers';
import AlbumCard from '../../../components/Albums/AlbumCard/AlbumCard';

describe('testing card section', () => {
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

  

    // jest.mock("react-redux", () => ({
    //     ...jest.requireActual("react-redux"),
    //     useDispatch: jest.fn(),
    //   }));

    // jest.mock('react-redux', () => ({
    //     useDispatch: () => jest.fn()
        
    //   }));
      
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

    // const album: Album = {
    //     category: "Rcoks",
    //     id: "123564",
    //     artist: {
    //         name: "Ragav",
    //         url: "https://www.google.com/search?q=render+component+with+props+for+test+react+typescript&oq=render+component+with+props+fro+test&aqs=chrome.2.69i57j33i10i160l4j33i10i22i29i30l2.17455j0j7&sourceid=chrome&ie=UTF-8"

    //     },
    //     img: "data:image/jpeg;base64,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",
    //     name: "Endiran",
    //     price: "$19.99",
    //     year: 2023,
    //     isFavorite: false,
    //     albumUrl: "https://www.google.com/search?q=render+component+with+props+for+test+react+typescript&oq=render+component+with+props+fro+test&aqs=chrome.2.69i57j33i10i160l4j33i10i22i29i30l2.17455j0j7&sourceid=chrome&ie=UTF-8"
    // }


    let store: Store<State, Action>;

    beforeEach(() => {
        store = createStore(rootReducer);
        
    })
    // beforeEach(() => {
    //     useDispatch.
    //     });
    //   });



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


      test('Verify that clicking on the favorite icon dispatches the correct action', () => {
        const dispatch = jest.fn();
        //useDispatchMock.mockReturnValue(dispatch);
      
        const { getByTestId } = render(<Provider store={store}>
            <AlbumCard album={album} />
        </Provider>);
      
        fireEvent.click(getByTestId('fav-icon'));
      
        expect(dispatch).toHaveBeenCalledWith({ type: ActionType.ADD_TO_FAVORITES, payload: album });
      
        fireEvent.click(getByTestId('fav-icon'));
      
        expect(dispatch).toHaveBeenCalledWith({ type: ActionType.REMOVE_FROM_FAVORITES, payload: album });
      });




    // describe("render card with improper passed props", () => {
    //     test('render card with improper artist', () => {
    //         const albumData: any = {
    //             ...album,
    //             artist: null
    //         }

    //         render(
    //             <Provider store={store}>
    //                 <AlbumCard album={albumData} />
    //             </Provider>
    //         );

    //         const nameElement = screen.queryByTestId("artist-name");
    //         expect(nameElement).not.toBeInTheDocument();

    //         expect(() => render(
    //             <Provider store={store}>
    //                 <AlbumCard album={albumData} />
    //             </Provider>
    //         )).not.toThrow();
    //     });
    // })


})