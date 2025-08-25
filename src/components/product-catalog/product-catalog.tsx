import type { Product } from '~/types/product';
import ProductCard from '~/components/product-card/product-card';

import styles from './product-catalog.module.css';

type ProductCatalogProps = {
  products: Product[];
};

export default function ProductCatalog({ products }: ProductCatalogProps) {
  return (
    <div className={styles.catalog}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
