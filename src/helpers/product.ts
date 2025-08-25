import type { Product, ProductWithQuantity } from '~/types/product';
import type { CartItem } from '~/types/cart';

export const getCartProducts = (cartItems: CartItem[], products: Product[]): ProductWithQuantity[] => {
  return cartItems
    .map((i) => {
      const product = products.find((p) => p.id === i.productId);
      return product ? { ...product, quantity: i.quantity } : null;
    })
    .filter((i): i is ProductWithQuantity => i !== null);
};
