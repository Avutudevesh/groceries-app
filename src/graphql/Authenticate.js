const query = `
query Authenticate($email:String!,$password:String!){
    login(email:$email,password:$password){
      userId,
      token,
      tokenExpiration
    }
  }
`;

export default query;
