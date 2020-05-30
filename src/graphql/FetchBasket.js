const query = `
query FetchBasket{
    basket{
      quantity
      product{
        _id,
       productId,
       title,
       imageUrl,
       newPrice,
       quantity
      }
    }
  }
`;
export default query;
