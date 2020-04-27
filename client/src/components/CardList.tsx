import React from 'react';
import Card from './Card';
import { Country } from './App';
import styled from 'styled-components';

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
          key={country.id}
          imgUrl={country.imgUrl}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          latitude={country.latitude}
          longitude={country.longitude}
        />
      );
    });
    return cardsHTML;
  };

  return <CardListContainer>{renderCards()}</CardListContainer>;
};

export default CardList;

// Styled component
const CardListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1% 5%;
`;
