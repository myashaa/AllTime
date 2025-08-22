import type { ProductData } from '~/const/mock';
import ProductCard from '~/components/product-card/product-card';

import styles from './product-catalog.module.css';

type ProductCatalogProps = {
  products: ProductData[];
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
