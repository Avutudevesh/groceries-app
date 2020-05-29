const query = `
  query TaxonomyDepartments{
    departments{
      _id,
      name,
      image,
      iconImage
    }
  }
`;

export default query;
