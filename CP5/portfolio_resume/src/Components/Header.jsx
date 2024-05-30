import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
`;

const Header = () => (
  <HeaderContainer>
    <h1>Software Designer Portfolio</h1>
  </HeaderContainer>
);

export default Header;