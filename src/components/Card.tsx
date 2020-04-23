import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import ModeContext from '../contexts/mode';

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
  const [flipped, setFlipped] = useState(false);

  return (
    <CardContainer
      mode={mode}
      flipped={flipped}
      onClick={() => setFlipped((flipped) => !flipped)}
    >
      <CardBack>
        <div>BACK</div>
      </CardBack>

      <CardFront>
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
      </CardFront>
    </CardContainer>
  );
};

export default Card;

// Styled component
const CardContainer = styled.div`
  border-radius: 5px;
  margin: 2%;
  width: 250px;

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

  ${({ flipped = true }: CardContainerProps) =>
    flipped === false
      ? `
      & ${CardFront} {
        display: block;
      }
      & ${CardBack} {
        display: none;
      }
      `
      : `
      & ${CardBack} {
        display: block;
      }
      & ${CardFront} {
        display: none;
      }
  `};
`;

interface CardContainerProps {
  mode: string;
  flipped: boolean;
}

const CardFront = styled.div`
  & div {
    margin: 5% 0;
    padding: 10%;
  }

  & img {
    max-width: 100%;
  }
`;

const CardBack = styled.div`
  & div {
    margin: 5% 0;
    padding: 10%;
  }
`;
