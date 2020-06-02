const query = `
mutation EditAccount(
    $email:String!,
    $name:String!,
    $phone:String!,
    $addressline1:String!,
    $addressline2:String,
    $pincode:String!,
    $city:String!,
    $state:String!
    
  ){
    editAccountDetails(accountInput:{
      email:$email,
      name:$name,
      phone:$phone,
      address:{
        line1:$addressline1,
        line2:$addressline2,
        pincode:$pincode,
        city:$city,
        state:$state
      }
    }){
      _id,
      email,
      name,
      phone,
      address{
        line1,
        line2,
        city,
        state,
        pincode
      }
    }
  }
`;

export default query;
