import React, { useEffect, useReducer } from 'react';
import CardList from './CardList';
import axios from 'axios';

export interface Country {
  id: number;
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

interface RESTCountriesResponse {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
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
    const url = `https://restcountries.eu/rest/v2/all`;
    //Fetch country data and set it on state
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        const countries: Country[] = response.data.map(
          (result: RESTCountriesResponse) => {
            return {
              imgUrl: result.flag,
              name: result.name,
              population: result.population,
              region: result.region,
              capital: result.capital,
            };
          }
        );
        dispatch({ type: 'fetch_countries', payload: countries });
      })
      .catch((error) => {
        console.warn(error.message);
      });
  }, []);

  return <CardList countries={state.countries} />;
};

export default App;
