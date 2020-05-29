const query = `
query GetProductsForPromotionType{
  specialOfferProducts {
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
