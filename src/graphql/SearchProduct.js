const query = `query SearchProduct($query:String!){
  search(query:$query){
    _id,
     productId,
     title,
     imageUrl,
     newPrice,
     quantity
  }
}`;

export default query;
