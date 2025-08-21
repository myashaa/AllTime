import { useState } from 'react';
import { Flex, Pagination } from 'antd';
import LayoutBase from '~/layouts/base/base';
import ProductCatalog from '~/components/product-catalog/product-catalog';
import { CATALOG } from '~/const/mock';

import styles from './home.module.css';

export default function Home() {
  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const startIndex = (currentPage - 1) * pageSize;
  const currentProducts = CATALOG.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <LayoutBase title="Главная">
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
