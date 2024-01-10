

import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    women: 4,
    men: 5,
}


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection =  createSelector(
    [selectCollections],
    collections => {
      if (collections) {
        return Object.values(collections).find(collection => collection.id === COLLECTION_ID_MAP);
      }
      return null;
    }
  );

