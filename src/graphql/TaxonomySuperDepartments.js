const query = `
	query TaxonomySuperDepts($storeId: ID, $business: String) {
		taxonomy(storeId: $storeId, business: $business) {
			id
			name
			label
			images {
				style
				images {
					url
				}
			}
		}
	}
`;

export default query;
