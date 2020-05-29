const query = `query TaxonomyForCategory($id: ID!){
	subcategories(id:$id){
	  _id,
	  id,
	  name,
	  image,
	}
  }
`;

export default query;
