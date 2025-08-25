import { CATALOG } from '~/const/mock';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  article: string;
  country: string;
  gender: string;
  typeOfMechanism: string;
};

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
