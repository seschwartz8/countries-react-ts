import React, { useEffect, useReducer } from 'react';
import CardList from './CardList';
import Loading from './Loading';
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
  error: string | null;
  loading: boolean;
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

const App = () => {
  const reducer = (state: AppState, action: Action) => {
    switch (action.type) {
      case 'fetch_countries':
        return {
          ...state,
          countries: action.payload,
          error: null,
          loading: false,
        };
      case 'error':
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };

  const initialState: AppState = {
    countries: [],
    error: null,
    loading: true,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/all`;
    //Fetch country data and set it on state
    axios
      .get(url)
      .then((response) => {
        const countries: Country[] = response.data.map(
          (result: RESTCountriesResponse, index: number) => {
            return {
              id: index,
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
        dispatch({ type: 'error', payload: error.message });
      });
  }, []);

  if (state.loading) {
    return <Loading />;
  }

  if (state.error) {
    return <h3>{state.error}</h3>;
  }

  return <CardList countries={state.countries} />;
};

export default App;
