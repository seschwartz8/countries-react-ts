import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  box-shadow: 2px 2px 2px 2px #ededed;
  border: 1px solid blue;
  background-color: white;

  & img {
    max-width: 250px;
  }
`;

interface CardProps {
  imgUrl: string;
  name: string;
  population: string;
  region: string;
  capital: string;
}

const Card: React.FC<CardProps> = ({
  imgUrl,
  name,
  population,
  region,
  capital,
}: CardProps) => {
  return (
    <CardContainer>
      <img src={imgUrl} alt={name}></img>
      <h3>{name}</h3>
      <p>
        <b>Population: </b> {population}
      </p>
      <p>
        <b>Region: </b> {region}
      </p>
      <p>
        <b>Capital: </b> {capital}
      </p>
    </CardContainer>
  );
};

export default Card;
