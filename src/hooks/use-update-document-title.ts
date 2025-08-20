import { useEffect } from 'react';
import { AppConfig } from '~/const/app';

const useUpdateDocumentTitle = (title): void => {
  useEffect(() => {
    document.title = `${title} | ${AppConfig.DESCRIPTION}`;
  }, [title]);
};

export default useUpdateDocumentTitle;
