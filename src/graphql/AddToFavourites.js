const graphql = `
mutation AddFavourite($_id:ID!){
    addToFavourites(_id:$_id){
      _id,
      productId,
      title,
      imageUrl,
      newPrice,
      quantity
    }
  }
`;

export default graphql;
