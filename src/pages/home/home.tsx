import LayoutBase from '~/layouts/base/base';
import ProductCatalog from '~/components/product-catalog/product-catalog';

export default function Home() {
  return (
    <LayoutBase title="Главная">
      <ProductCatalog />
    </LayoutBase>
  );
}
