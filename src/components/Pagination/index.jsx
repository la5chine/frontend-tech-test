import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '@lumx/react';


const Pagination = ({
  totalCount,
  currentPage,
  paginate
}) => {
  const postsPerPage = 4;
  const NumberOfPages = Math.ceil(totalCount / postsPerPage);

  const getShownPages = useCallback((selectedPage) => {
    const dummyShownPages = [1, 2, parseInt(selectedPage) - 1, parseInt(selectedPage), parseInt(selectedPage),
      NumberOfPages - 1, NumberOfPages];
    return dummyShownPages.filter(
      (pageNumber, index) => {
        return (pageNumber < NumberOfPages + 1 && pageNumber >= 1 && dummyShownPages.indexOf(pageNumber) === index);
      }
    )
      .sort(function (a, b) {
        return a - b;
      });
  }, [NumberOfPages]);

  const [shownPages, setShownPages] = useState(getShownPages(currentPage));

  const onPageChange = (pageNumber) => {
    setShownPages(getShownPages(pageNumber));
    return paginate(pageNumber);
  };


  useEffect(() => {
    setShownPages(getShownPages(currentPage));
  }, [totalCount, getShownPages, currentPage]);

  return (
    <section className="pagination-section">
      {shownPages.map((pageNumber, index) =>
        <Button value={pageNumber} onClick={(event) => onPageChange(event.currentTarget.value)}
                key={index} isDisabled={(currentPage == pageNumber)}>{pageNumber}</Button>
      )}
    </section>
  );
};


export default Pagination;
