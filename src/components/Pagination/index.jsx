import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '@lumx/react';


const Pagination = ({
  totalCount,
  paginate
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const NumberOfPages = Math.ceil(totalCount / postsPerPage);

  const getShownPages = useCallback((selectedPage) => {
    const dummyShownPages = [1, 2, parseInt(selectedPage), parseInt(selectedPage) + 1, parseInt(selectedPage) + 2,
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

  const [shownPages, setShownPages] = useState(getShownPages(1));

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setShownPages(getShownPages(pageNumber));
    return paginate(pageNumber);
  };


  useEffect(() => {
    setShownPages(getShownPages(1));
  }, [totalCount, getShownPages]);

  return (
    <>
      {shownPages.map((pageNumber, index) =>
        <Button value={pageNumber} onClick={(event) => onPageChange(event.currentTarget.value)}
                key={index} isDisabled={currentPage == pageNumber}>{pageNumber}</Button>
      )}
    </>
  );
};


export default Pagination;
