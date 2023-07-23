import React, { useState } from 'react';
import { Button } from '@lumx/react';


const Pagination = ({
  totalCount,
  paginate
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const NumberOfPages = Math.ceil(totalCount / postsPerPage);


  return (
    <>
      {[...Array(NumberOfPages + 1)
        .keys()].slice(1)
        .map((pageNumber) =>
          <Button value={pageNumber} onClick={(event) => paginate(event.currentTarget.value)}
                  key={pageNumber} isDisabled={currentPage === pageNumber}>{pageNumber}</Button>
        )}
    </>
  );
};


export default Pagination;
