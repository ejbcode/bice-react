import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Select2 from './Select2';

const FormStyle = styled.form`
  text-align: center;
`;

function Form({ handleSubmit, setId }) {
  return (
    <FormStyle onSubmit={handleSubmit}>
      <Select2 setId={setId} />
      <Button />
    </FormStyle>
  );
}

export default Form;
