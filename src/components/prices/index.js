import React from "react";
import styled from "styled-components";
import MediaQuery from "../../MediaQuery";

const PricesWrapper = styled.div`
  border: 1px solid #dedede;
  padding: 1rem;
  margin: 1rem 0;
  ${props =>
    props.flex && "display:flex; flex-wrap:wrap; flexDirection:row; padding:0"};
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  min-width: 250px;
  ${props => props.flex && "flex:1; margin:1rem"};
`;

PriceWrapper.Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  ${MediaQuery.tablet`flex-direction:row; justify-content:center; align-items: center`};
`;

PriceWrapper.Label = styled.h4`
  flex: 1;
  margin: 0;
  text-align: left;
`;

PriceWrapper.Price = styled.h5`
  font-weight: bold;
  margin: 0;
  text-align: center;
  ${MediaQuery.tablet`text-align:right; width: 4rem;`};
`;

PriceWrapper.Image = styled.img`
  width: 6rem;
  height: 6rem;
  margin-right: 0.5rem;
  object-fit: cover;
  ${props => props.flex && "margin:0 .5rem 0 0;"};
`;

PriceWrapper.Duration = styled.div`
  ${MediaQuery.tablet`margin:0 0 0 .5rem`}
`;

const Price = ({ price: { duration, article, price, image }, flex }) => {
  return (
    <PriceWrapper flex={flex}>
      {image && (
        <PriceWrapper.Image
          flex={flex}
          src={`/uploads/${image}`}
          alt={article}
        />
      )}
      <PriceWrapper.Content>
        <PriceWrapper.Label>{article}</PriceWrapper.Label>
        {duration && <PriceWrapper.Duration>{duration}</PriceWrapper.Duration>}
        {price && <PriceWrapper.Price>{price}</PriceWrapper.Price>}
      </PriceWrapper.Content>
    </PriceWrapper>
  );
};

const Prices = ({ prices, flex }) => {
  return (
    <PricesWrapper flex={flex}>
      {prices.map((price, index) => (
        <Price key={index} price={price} flex={flex} />
      ))}
    </PricesWrapper>
  );
};

export default Prices;
