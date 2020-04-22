import React, { useEffect, useReducer } from 'react';
import CardList from './CardList';

export interface Country {
  imgUrl: string;
  name: string;
  population: string;
  region: string;
  capital: string;
}

interface AppState {
  countries: Country[];
}

interface Action {
  type: string;
  // Accept additional properties
  [x: string]: any;
}

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'fetch_countries':
      return { ...state, countries: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const initialState: AppState = {
    countries: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    //Fetch country data and set it on state

    // FOR NOW JUST PUTTING FAKE DATA
    const fakeData: Country[] = [
      {
        imgUrl:
          'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png',
        name: 'England',
        population: '400,5889,111',
        region: 'Europe',
        capital: 'London',
      },
    ];
    // INPUT FAKE DATA
    dispatch({ type: 'fetch_countries', payload: fakeData });
  }, []);

  return <CardList countries={state.countries} />;
};

export default App;
