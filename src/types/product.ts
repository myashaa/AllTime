export type Product = {
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

export type ProductWithQuantity = Product & { quantity: number };
