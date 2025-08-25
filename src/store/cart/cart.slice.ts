import type { CartItem } from '~/types/cart';

type CartState = {
  items: CartItem[];
};

type CartActions = {
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  incrementCartItemQuantity: (productId: number) => void;
  decrementCartItemQuantity: (productId: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalAmount: () => number;
};

export type CartSlice = CartState & CartActions;

const initialState: CartState = {
  items: [],
};

export const createCartSlice = (set, get) => ({
  ...initialState,
  addToCart: (productId) =>
    set((state) => ({
      cart: {
        ...state.cart,
        items: [...state.cart.items, { productId, quantity: 1 }],
      },
    })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: {
        ...state.cart,
        items: state.cart.items.filter((i) => i.productId !== productId),
      },
    })),
  incrementCartItemQuantity: (productId) =>
    set((state) => ({
      cart: {
        ...state.cart,
        items: state.cart.items.map((i) => (i.productId === productId ? { ...i, quantity: i.quantity + 1 } : i)),
      },
    })),
  decrementCartItemQuantity: (productId) =>
    set((state) => ({
      cart: {
        ...state.cart,
        items: state.cart.items.map((i) => (i.productId === productId ? { ...i, quantity: i.quantity - 1 } : i)),
      },
    })),
  clearCart: () =>
    set((state) => ({
      cart: {
        ...state.cart,
        ...initialState,
      },
    })),
  getTotalItems: () => {
    const currentState = get().cart;
    return currentState.items.reduce((total, i) => total + i.quantity, 0);
  },
  getTotalAmount: () => {
    const cartState = get().cart;
    const catalogState = get().catalog;

    return cartState.items.reduce((total, cartItem) => {
      const product = catalogState.getProductById(cartItem.productId);
      return total + (product ? product.price * cartItem.quantity : 0);
    }, 0);
  },
});
