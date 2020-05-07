const query = `query TaxonomyForCategory($categoryId: ID,$storeId: ID, $business: String) {
	taxonomy (categoryId: $categoryId, storeid: $storeId, business: $business){
		id
		name
		label
		children {
			...childItem
			children {
				...childItem
				children {
					...childItem
				}
			}
		}
	}

}

fragment childItem on TaxonomyItemInterface {
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
`;

export default query;
