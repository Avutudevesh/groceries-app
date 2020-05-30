const query = `mutation UpdateBasket($quantity:Int!,$_id:ID!){
    updateBasket(item:{quantity:$quantity,_id:$_id}){
      quantity,
      product{
       _id,
       productId,
       title,
       imageUrl,
       newPrice,
       quantity
      }
    }
  }`;

export default query;
