import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../helpers/formatPrice';

const CardStyle = styled.div`
  width: 328px;
  /* height: 272px; */
  background: #ffffff;
  border: 1px solid #dde3ed;
  border-radius: 8px;
  overflow: hidden;
  margin: 50px auto 0;

  .content {
    padding: 8px;
  }
  .title {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #060b25;
  }

  .paragraph {
    /* width: 51px;
    height: 24px; */
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #58606e;
  }
  .label {
    position: absolute;
    bottom: 8px;
    left: 8px;
    z-index: 100000;
    height: 20px;
    background: #1f61f7;
    border-radius: 4px;
    padding: 0 8px;

    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-align: center;

    letter-spacing: -0.2px;
    color: #f5f7fa;
  }
  .image {
    width: 328px;
    height: 192px;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 18rem;
      object-fit: cover;
    }
  }
`;

function Card({ data }) {
  const { name, description, price, image } = data.insurance;
  return (
    <CardStyle>
      <div className="image">
        <img src={image} alt="" />
        <p className="label">{formatPrice(price)}</p>
      </div>
      <div className="content">
        <p className="title">{name}</p>
        <p className="paragraph">{description}</p>
      </div>
    </CardStyle>
  );
}

export default Card;
