import React from 'react';

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
    <div>
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
    </div>
  );
};

export default Card;
