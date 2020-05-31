const query = `
  query TaxonomyDepartments{
    departments{
      _id,
      id,
      name,
      image,
      iconImage
    }
  }
`;

export default query;
