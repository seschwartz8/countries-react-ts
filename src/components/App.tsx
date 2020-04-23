import React, { useEffect, useReducer } from 'react';
import ModeContext from '../contexts/mode';
import CardList from './CardList';
import Loading from './Loading';
import Nav from './Nav';
import Search from './Search';
import axios from 'axios';
import styled from 'styled-components';

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
  mode: string;
  search: string;
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
      return {
        ...state,
        countries: action.payload,
        error: null,
        loading: false,
      };
    case 'error':
      return { ...state, error: action.payload, loading: false };
    case 'toggle_mode':
      return { ...state, mode: action.payload };
    case 'submit_search':
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const initialState: AppState = {
    countries: [],
    error: null,
    loading: true,
    mode: 'light',
    search: '',
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const url =
      state.search !== ''
        ? `https://restcountries.eu/rest/v2/name/${state.search}`
        : `https://restcountries.eu/rest/v2/all`;
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
        state.search !== ''
          ? dispatch({
              type: 'error',
              payload: 'No countries matched your search.',
            })
          : dispatch({ type: 'error', payload: error.message });
      });
  }, [state.search]);

  const toggleMode = () => {
    const newMode = state.mode === 'light' ? 'dark' : 'light';
    dispatch({ type: 'toggle_mode', payload: newMode });
  };

  const onSearchSubmit = (input: string) => {
    dispatch({ type: 'submit_search', payload: input });
  };

  const renderCountries = () => {
    if (state.loading) {
      return <Loading />;
    }

    if (state.error) {
      return <Error>{state.error}</Error>;
    }

    return <CardList countries={state.countries} />;
  };

  return (
    <ModeContext.Provider value={state.mode}>
      <StyledApp mode={state.mode}>
        <Nav toggleMode={toggleMode} />
        <Search onSearchSubmit={onSearchSubmit} />
        {renderCountries()}
      </StyledApp>
    </ModeContext.Provider>
  );
};

export default App;

// Styled component
const StyledApp = styled.div`
  min-height: 100vh;

  ${({ mode = 'light' }: StyledAppProps) =>
    mode === `light`
      ? `
    background-color: #ededed;
    color: black;
  `
      : `
    background-color: #212E37;
    color: white;
  `};
`;

interface StyledAppProps {
  mode: string;
}

const Error = styled.h3`
  text-align: center;
  margin: 3%;
`;
