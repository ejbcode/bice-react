import React from 'react';
import styled from 'styled-components';

const SelectStyle = styled.select`
  background: #ffffff;
  border: 1px solid #dde3ed;
  box-sizing: border-box;
  border-radius: 4px;
  height: 40px;
  width: 300px;
  display: inline-block;
  margin: 30px;

  :focus {
    background: #ffffff;
    border: 2px solid #1f61f7;
    box-sizing: border-box;
    border-radius: 4px;
  }
`;

function Select() {
  const handleChange = () => {};
  return (
    <SelectStyle id="seguros" onChange={handleChange}>
      <option hidden selected>
        Selecciona una opción
      </option>
      <option value="58">Seguro Vida Activa</option>
      <option value="59">Seguro Viaje Protegido </option>
    </SelectStyle>
  );
}

export default Select;
