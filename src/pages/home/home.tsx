import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flex, Pagination } from 'antd';
import LayoutBase from '~/layouts/base/base';
import ProductCatalog from '~/components/product-catalog/product-catalog';
import { CATALOG } from '~/const/mock';
import { NameSpaces } from '~/i18n/name-spaces';

import styles from './home.module.css';

export default function Home() {
  const { t } = useTranslation(NameSpaces.COMMON);

  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const startIndex = (currentPage - 1) * pageSize;
  const currentProducts = CATALOG.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <LayoutBase title={t('pageTitle.home')}>
      <ProductCatalog products={currentProducts} />

      <Flex justify="center" className={styles.paginationWrapper}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={CATALOG.length}
          onChange={handlePageChange}
          hideOnSinglePage
        />
      </Flex>
    </LayoutBase>
  );
}
