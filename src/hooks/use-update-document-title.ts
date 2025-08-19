import { useEffect } from 'react';
import { APP_CONFIG } from '~/const/app';

const useUpdateDocumentTitle = (title): void => {
  useEffect(() => {
    document.title = `${title} | ${APP_CONFIG.DESCRIPTION}`;
  }, [title]);
};

export default useUpdateDocumentTitle;
