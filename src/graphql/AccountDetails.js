const query = `
query AccountDetails{
    accountDetails{
      name,
      email,
      phone,
      address {
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
