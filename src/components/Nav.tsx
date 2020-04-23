import React, { useContext } from 'react';
import styled from 'styled-components';
import { LightModeIcon, DarkModeIcon } from '../svg/index';
import ModeContext from '../contexts/mode';

interface NavProps {
  toggleMode: () => void;
}

const Nav: React.FC<NavProps> = ({ toggleMode }: NavProps) => {
  const mode = useContext(ModeContext);

  return (
    <NavContainer mode={mode}>
      <NavItem>
        <h2>World Traveler</h2>
      </NavItem>

      <RightNav>
        <NavItem>My Destinations</NavItem>

        <NavItem onClick={toggleMode}>
          {mode === 'light' ? LightModeIcon() : DarkModeIcon()}
        </NavItem>
      </RightNav>
    </NavContainer>
  );
};

export default Nav;

// Styled component
const NavItem = styled.div`
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }
`;

const RightNav = styled.div``;

const NavContainer = styled.div`
  width: 100%;
  min-height: 70px;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ mode = 'light' }: NavContainerProps) =>
    mode === `light`
      ? `
    background-color: white;
    color: black;
    box-shadow: 0 0 10px #d9d9d9;
    `
      : `
    background-color: #324354;
    color: white;
    box-shadow: 0 0 10px #1D2A36;
    `};

  & ${RightNav} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & ${NavItem} {
    cursor: pointer;
    margin: 0 15px;
  }
`;

interface NavContainerProps {
  mode: string;
}
