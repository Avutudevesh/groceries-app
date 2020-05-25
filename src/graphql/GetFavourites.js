const query = `query GetFavourites(
    $business: String,
    $page: Int, $count: Int,
    $offers: Boolean, $new: Boolean,
    $promotion: String,
    $sortBy: String,
    $includeProductList: Boolean = true,
    $includeFacetList: Boolean = false,
    $startDate: String,
    $endDate: String,
    $inclusionList: [FavouriteIncludeOptions], 
    $uuid: String,
    $storeId: String,
    $configs: [ConfigArgType]
  ) {
    favourites(
      business: $business,
      page: $page, count: $count,
      offers: $offers, promotion: $promotion,
      new: $new,
      sortBy: $sortBy,
      inclusionList: $inclusionList, 
      context: { UUID: $uuid, storeId: $storeId }
      configs: $configs
    ) {
      pageInformation: info {
        ...PageInformation
      }
      productItems: products @include(if: $includeProductList) {
        ...ProductItem
        context {
          type
        }
        substitutions {
          ...ProductItem
        }
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
  }`;

export default query;
