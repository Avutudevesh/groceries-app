const query = `
query Authenticate($email:String!,$password:String!){
    login(email:$email,password:$password){
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
  }
`;

export default query;
