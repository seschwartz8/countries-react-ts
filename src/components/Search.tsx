import React from 'react';
import styled from 'styled-components';

interface SearchProps {
  input?: string;
}

const Search: React.FC<SearchProps> = ({ input = '' }: SearchProps) => {
  return (
    <SearchContainer>
      <div>Search</div>
    </SearchContainer>
  );
};

export default Search;

// Styled components
const SearchContainer = styled.div``;
