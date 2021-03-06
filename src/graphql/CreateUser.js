const query = `mutation CreateUser(
    $email:String!,
    $password:String!,
    $name:String!,
    $phone:String!,
    $addressline1:String!,
    $addressline2:String,
    $pincode:String!,
    $city:String!,
    $state:String!
    
  ){
    createUser(userInput:{
      email:$email,
      password:$password,
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
      userId,
      token,
      tokenExpiration,
      account{
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
  }`;

export default query;
