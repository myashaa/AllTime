import { Flex } from 'antd';
import { CATALOG } from '~/const/mock';
import ProductCard from '~/components/product-card/product-card';

function ProductCatalog() {
  return (
    <Flex gap={20} wrap justify="center">
      {CATALOG.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </Flex>
  );
}

export default ProductCatalog;
