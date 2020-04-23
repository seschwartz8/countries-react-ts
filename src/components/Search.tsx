import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import ModeContext from '../contexts/mode';
import { SearchIcon } from '../svg/index';

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const mode = useContext(ModeContext);
  const [input, setInput] = useState('');

  return (
    <SearchContainer>
      <form>
        <input
          type='text'
          placeholder='Search...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit'>{SearchIcon()}</button>
      </form>
    </SearchContainer>
  );
};

export default Search;

// Styled components
const SearchContainer = styled.div``;
