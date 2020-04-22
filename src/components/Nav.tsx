import React from 'react';
import styled from 'styled-components';
import { LightModeIcon } from '../svg/index';

const NavContainer = styled.div`
  width: 100%;
  min-height: 70px;
  padding: 0 5%;
  box-shadow: 0 0 10px #d9d9d9;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = () => {
  return (
    <NavContainer>
      <h2>Country Finder</h2>
      {LightModeIcon()}
    </NavContainer>
  );
};

export default Nav;
