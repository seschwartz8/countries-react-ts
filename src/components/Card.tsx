import React, { useContext } from 'react';
import styled from 'styled-components';
import ModeContext from '../contexts/mode';

const CardContainer = styled.div`
  border-radius: 5px;
  margin: 2%;

  & div {
    margin: 5% 0;
    padding: 10%;
  }

  & img {
    max-width: 250px;
  }

  ${({ mode = 'light' }: CardContainerProps) =>
    mode === `light`
      ? `
      background-color: white;
      color: black;
      box-shadow: 0 0 8px #d9d9d9;
      `
      : `
      background-color: #324354;
      color: white;
      box-shadow: 0 0 8px #1D2A36;
      `};
`;

interface CardContainerProps {
  mode: string;
}

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
  const mode = useContext(ModeContext);

  return (
    <CardContainer mode={mode}>
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
