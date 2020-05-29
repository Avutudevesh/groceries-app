const query = `
query GetCategoryProducts($departmentId:Int, $aisleId:Int,$shelfId:Int){
  categoryProducts(departmentId:$departmentId,aisleId:$aisleId,shelfId:$shelfId) {
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
