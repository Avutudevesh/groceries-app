const query = `
query GetProductsForPromotionType($promotionType: String!, $uuid: String, $page: Int, $count: Int, $startDate: String, $endDate: String, $favourites: Boolean, $new: Boolean, $brands: [String], $dietary: String, $superDepartment: String, $department: String, $aisle: String, $shelf: String, $sortBy: String, $includeProductList: Boolean = true, $includeFacetList: Boolean = false) {
    promotionType(type: $promotionType, context: {UUID: $uuid}, page: $page, count: $count, favourites: $favourites, new: $new, brands: $brands, dietary: $dietary, superDepartment: $superDepartment, department: $department, aisle: $aisle, shelf: $shelf, sortBy: $sortBy) {
      pageInformation: info {
        ...PageInformation
      }
      productItems: products {
        ...ProductItem
      }
      facetLists: facetGroups {
        ...FacetLists
      }
      options {
        sortBy
      }
    }
  }
  
  fragment PageInformation on ListInfoInterface {
    totalCount: total
    pageNo: page
    count
  }
  
  fragment ProductItem on ProductInterface {
    id
    baseProductId
    title
    departmentName
    isInFavourites
    price {
      actual
      unitPrice
      unitOfMeasure
    }
    catchWeightList {
      price
      weight
      default
    }
    status
    isForSale
    displayType
    productType
    averageWeight
    defaultImageUrl
    maxQuantity: bulkBuyLimit
    bulkBuyLimitGroupMaxQuantity: groupBulkBuyLimit
    bulkBuyLimitGroupID: bulkBuyLimitGroupId
    bulkBuyLimitGroupMessage: bulkBuyLimitMessage
    restrictions(startDateTime: $startDate, endDateTime: $endDate) {
      type
      isViolated
      message
    }
    promotions {
      promotionId: id
      startDate
      endDate
      offerText: description
    }
  }
  
  fragment FacetLists on ProductListFacetGroupInterface {
    groupId: category
    facets {
      facetId: id
      facetName: name
      binCount: count
    }
  }
`;

export default query;
