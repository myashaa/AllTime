import { Flex } from 'antd';
import type { ProductData } from '~/const/mock';
import ProductCard from '~/components/product-card/product-card';

type ProductCatalogProps = {
  products: ProductData[];
};

export default function ProductCatalog({ products }: ProductCatalogProps) {
  return (
    <Flex gap={20} wrap justify="center">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </Flex>
  );
}
