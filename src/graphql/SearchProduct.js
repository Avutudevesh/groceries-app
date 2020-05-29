const query = `query SearchProduct(
    $query: String!,
    $facet: ID, $page: Int, $count: Int, $storeId: ID, $business: String,
    $offers: Boolean, $promotion: String, $new: Boolean, $favourites:Boolean, $brands: [String], $dietary: String,
    $superDepartment: String, $department: String, $aisle: String, $shelf: String,
    $sortBy: String,
    $includeProductList: Boolean = true,
    $includeFacetList: Boolean = false,
    $startDate: String,
    $endDate: String,
    $searchVariant: String
  ) {
    search(
      query: $query,
      facet: $facet, page: $page, count: $count, storeid: $storeId, business: $business,
      offers: $offers, promotion: $promotion, new: $new, favourites: $favourites, brands: $brands, dietary: $dietary,
      superDepartment: $superDepartment, department: $department, aisle: $aisle, shelf: $shelf,
      sortBy: $sortBy,
      config: { variant: $searchVariant }
    ) {
      pageInformation: info {
        ...PageInformation
      }
      productItems: products @include(if: $includeProductList) {
        ...ProductItem
      }
      facetLists: facetGroups @include(if: $includeFacetList) {
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
    matchType
    query {
      searchTerm
    }
  }
  
  fragment ProductItem on ProductInterface {
    id
    baseProductId
    title
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
    restrictedDeliveryDate
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
  }`;

export default query;