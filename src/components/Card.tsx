import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  box-shadow: 0 0 8px #d9d9d9;
  border-radius: 5px;
  background-color: white;
  margin: 2%;

  & div {
    margin: 5% 0;
    padding: 10%;
  }

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
      <div>
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
      </div>
    </CardContainer>
  );
};

export default Card;
