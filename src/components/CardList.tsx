import React from 'react';
import Card from './Card';
import { Country } from './App';
import styled from 'styled-components';

const CardListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 5%;
`;

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

  return <CardListContainer>{renderCards()}</CardListContainer>;
};

export default CardList;
