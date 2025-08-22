import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import LayoutBase from '~/layouts/base/base';
import { CATALOG } from '~/const/mock';
import Product from '~/components/product/product';
import EmptyContent from '~/components/empty-content/empty-content';
import BackLink from '~/components/back-link/back-link';
import { NameSpaces } from '~/i18n/name-spaces';

export default function ProductDetails() {
  const { productId } = useParams();
  const { t } = useTranslation(NameSpaces.COMMON);

  const product = CATALOG.find((item) => item.id === Number(productId));

  return (
    <LayoutBase title={t('pageTitle.productDetails')}>
      <BackLink />
      {product ? <Product data={product} /> : <EmptyContent description={t('productNotFound')} />}
    </LayoutBase>
  );
}
