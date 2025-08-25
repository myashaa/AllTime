import { create } from 'zustand';
import type { CatalogSlice } from '~/store/catalog/catalog.slice.ts';
import { createCatalogSlice } from '~/store/catalog/catalog.slice.ts';
import type { CartSlice } from '~/store/cart/cart.slice.ts';
import { createCartSlice } from '~/store/cart/cart.slice.ts';

type Store = { catalog: CatalogSlice; cart: CartSlice };

export const useAppStore = create<Store>()((...a) => ({
  catalog: createCatalogSlice(...a),
  cart: createCartSlice(...a),
}));
