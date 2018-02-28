import React from "react";
import styled from "styled-components";

const PricesWrapper = styled.div`
  border: 1px solid #dedede;
  padding: 1rem;
  margin: 1rem 0;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;
PriceWrapper.Label = styled.h4`
  flex: 1;
  margin: 0;
`;

PriceWrapper.Price = styled.h5`
  font-weight: bold;
  width: 4rem;
  text-align: right;
  margin: 0;
`;

PriceWrapper.Image = styled.img`
  width: 6rem;
  height: 6rem;
  margin-right: 0.5rem;
  object-fit: cover;
`;

const Price = ({ price: { duration, article, price, image } }) => {
  return (
    <PriceWrapper>
      {image && <PriceWrapper.Image src={`/uploads/${image}`} alt={article} />}
      <PriceWrapper.Label>{article}</PriceWrapper.Label>
      {duration && <div>{duration}</div>}
      {price && <PriceWrapper.Price>{price}</PriceWrapper.Price>}
    </PriceWrapper>
  );
};

const Prices = ({ prices }) => {
  return (
    <PricesWrapper>
      {prices.map((price, index) => <Price key={index} price={price} />)}
    </PricesWrapper>
  );
};

export default Prices;
