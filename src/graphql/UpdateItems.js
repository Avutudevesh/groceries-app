const query = `mutation UpdateItems($items: [BasketLineItemInputType], $channel: ChannelType, $storeId: String, $substitutionPreferences: CustomerOrderType) {
    basket(items: $items, channel: $channel, storeId: $storeId, substitutionPreferences: $substitutionPreferences) {
      basketID: id
      storeID: storeId
      guidePrice
      savings
      isInAmend
      amendExpiry
      amendOrderId
      shoppingMethod
      constraints {
        maxItemCount
      }
      clubcardPoints {
        greenPoints: green
        promoPoints: promotional
        standardPoints: standard
        totalPoints: total
      }
      previousSlot {
        ...SlotInfo
      }
      slot {
        ...SlotInfo
      }
      deliveryAddress {
        id
        name
        postcode
      }
      customerPreferences {
        substituteAllItems
      }
      charges {
        minimumBasketValue: minimum
        surcharge
        bagCharge
      }
      items {
        quantity: count
        weight
        substitutionOption
        pickerNote
        product {
          id
          baseProductId
          gtin
          barcode
          title
          departmentName
          price {
            actual
            unitOfMeasure
            unitPrice
          }
          status
          isForSale
          displayType
          productType
          defaultImageUrl
          maxQuantity: bulkBuyLimit
          bulkBuyLimitGroupMaxQuantity: groupBulkBuyLimit
          bulkBuyLimitGroupID: bulkBuyLimitGroupId
          bulkBuyLimitGroupMessage: bulkBuyLimitMessage
          restrictions {
            type
            isViolated
            message
          }
          promotions {
            promotionId: id
            startDate
            endDate
            timesTriggered
            offerText: description
            missed
            statuses {
              warnings {
                type
                threshold
              }
            }
          }
          averageWeight
          catchWeightList {
            price
            weight
            default
          }
        }
      }
    }
  }
  
  fragment SlotInfo on SlotInterface {
        id
        start
        end
        reservationExpiry
        charge
        status
        group
        locationId
  }`;

export default query;
