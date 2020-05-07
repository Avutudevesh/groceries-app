const query = `
query TaxonomySuperDepts($storeId: ID, $business: String) {
	taxonomy(storeId: $storeId, business: $business) {
	    id
	    name
	    label
	    thumbnail: images(style: "thumbnail") {
			style
			images {
				url
			}
		}
	}
}
`;

export default query;
