const query = `query GetFavourites{
  favourites{
    _id,
    productId,
    title,
    imageUrl,
    newPrice,
    quantity
  }
}`;

export default query;
