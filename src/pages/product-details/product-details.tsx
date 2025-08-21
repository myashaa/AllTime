import { useParams } from 'react-router';
import LayoutBase from '~/layouts/base/base';
import { CATALOG } from '~/const/mock';
import Product from '~/components/product/product';
import EmptyContent from '~/components/empty-content/empty-content';
import BackLink from '~/components/back-link/back-link.tsx';

export default function ProductDetails() {
  const { productId } = useParams();

  const product = CATALOG.find((item) => item.id === Number(productId));

  return (
    <LayoutBase title="Детальная">
      <BackLink />

      {product ? <Product data={product} /> : <EmptyContent description="Товар не найден" />}
    </LayoutBase>
  );
}
