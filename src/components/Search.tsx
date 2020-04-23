import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import ModeContext from '../contexts/mode';
import { BlackSearchIcon, WhiteSearchIcon } from '../svg/index';

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const mode = useContext(ModeContext);
  const [input, setInput] = useState('');

  const onSubmit = (e: React.FormEvent<Element>) => {
    e.preventDefault();
  };

  return (
    <SearchContainer>
      <form>
        <input
          type='text'
          placeholder='Search...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit' onClick={onSubmit}>
          {mode === 'light' ? BlackSearchIcon() : WhiteSearchIcon()}
        </button>
      </form>
    </SearchContainer>
  );
};

export default Search;

// Styled components
const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2% 0 0 0;

  & form {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & input {
    width: 30vw;
    border-radius: 15px;
    border: none;
    padding: 2%;
  }

  & button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;
