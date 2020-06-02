const query = `
mutation RemoveFromFavourite($_id:ID!){
    removeFromFavourites(_id:$_id){
      _id,
      productId,
      title,
      imageUrl,
      newPrice,
      quantity
    }
  }
`;

export default query;
