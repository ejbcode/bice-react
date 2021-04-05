import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  padding: 8px 32px;
  width: 113px;
  height: 48px;
  background: #1f61f7;
  box-shadow: 0px 10px 16px rgba(18, 25, 84, 0.07);
  border-radius: 1000px;
  border: none;
  font-family: Poppins;
  font-weight: bold;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  ::selection {
    border: none;
  }
`;

function Button() {
  return <ButtonStyle type="submit">Botón</ButtonStyle>;
}

export default Button;
