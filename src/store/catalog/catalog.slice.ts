import { CATALOG } from '~/const/mock';
import type { Product } from '~/types/product';

type CatalogState = {
  products: Product[];
};

type CatalogActions = {
  getProductById: (id: number) => Product | undefined;
};

export type CatalogSlice = CatalogState & CatalogActions;

const initialState: CatalogState = {
  products: CATALOG,
};

export const createCatalogSlice = (set, get) => ({
  ...initialState,
  getProductById: (id) => {
    const currentState = get().catalog;
    return currentState.products.find((p) => p.id === id);
  },
});
