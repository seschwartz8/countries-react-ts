import React from 'react';
import Card from './Card';
import { Country } from './App';

interface CardListProps {
  countries?: Country[];
}

const CardList: React.FC<CardListProps> = ({
  countries = [],
}: CardListProps) => {
  const renderCards = () => {
    const cardsHTML = countries.map((country) => {
      return (
        <Card
          imgUrl={country.imgUrl}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      );
    });
    return cardsHTML;
  };

  return <div>{renderCards()}</div>;
};

export default CardList;
