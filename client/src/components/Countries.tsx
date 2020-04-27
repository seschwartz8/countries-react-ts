import React from 'react';
import Search from './Search';

interface CountriesProps {
  renderContent: () => JSX.Element;
  onSearchSubmit: (input: string) => void;
}

const Countries: React.FC<CountriesProps> = ({
  onSearchSubmit,
  renderContent,
}) => {
  return (
    <>
      <Search onSearchSubmit={onSearchSubmit} />
      {renderContent()}
    </>
  );
};

export default Countries;
