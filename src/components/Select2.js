import React, { useState } from 'react';
import styled from 'styled-components';

const SelectStyle = styled.div`
  position: relative;
  width: 350px;
  display: inline-block;
  margin-right: 60px;
  select:focus {
    border: 2px solid #1f61f7;
  }

  :focus-within::after {
    transform: rotate(90deg);
  }

  :after {
    content: '<';
    transform: rotate(-90deg);
    color: black;
    font-size: 20px;
    right: 5px;
    top: 17px;
    padding: 0 0 1px;
    position: absolute;
    pointer-events: none;
    transition: all 0.2s linear;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    display: block;
    width: 350px;
    max-width: 350px;
    height: 48px;
    margin: 5px 0px;
    padding: 0px 24px 0px 14px;
    outline: none;
    background-color: transparent;
    background: #ffffff;
    border: 1px solid #dde3ed;
    border-radius: 4px;
    width: 350px;
    font-size: 12px;
  }

  select:required:invalid {
    color: gray;
  }

  option[value=''][disabled] {
    display: none;
  }
  label {
    position: absolute;
    top: 7px;
    left: 10px;
    font-size: 10px;
    color: #00bafa;
    transition: all 0.1s linear;
    opacity: 1;
    background-image: linear-gradient(to bottom, #fff, #fff);
    background-size: 100% 10px;
    background-repeat: no-repeat;
    background-position: center;
    font-weight: normal;
    padding: 0px 3px 0px 3px;
    margin: 0px 0px 0px 2px;
    opacity: ${(props) => (props.insurance ? '1' : '0')};
  }

  option {
    color: black;
  }
  .watermark {
    color: #00bafa;
  }
`;

function Select2({ setId }) {
  const [insurance, setInsurance] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    const sd = parseInt(event.target.value);
    setInsurance(sd);
    setId(sd);
  };

  return (
    <SelectStyle insurance={insurance}>
      <label className="" htmlFor="state">
        Plan seleccionado
      </label>
      <select
        name="State"
        placeholder="State"
        required
        onChange={handleChange}
        value={insurance}
      >
        <option value="" disabled>
          Selecciona una opción...
        </option>

        <option key={58} value="58">
          Seguro Vida Activa 58
        </option>
        <option key={59} value="59">
          Seguro Viaje Protegido 59{' '}
        </option>
      </select>
    </SelectStyle>
  );
}

export default Select2;
