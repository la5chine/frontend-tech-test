import React, { useState } from 'react';
import CharactersSection from '../CharactersSection';
import Pagination from '../Pagination';
import { searchCharacters } from '../../api';
import { FlexBox } from '@lumx/react';


const Results = ({
  setResults,
  results,
  totalCount,
  searchTerm,
  isLoading,
  setIsLoading,
  hasError
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => {
    setIsLoading(true);
    searchCharacters(searchTerm, (pageNumber - 1) * 4)
      .then(({ data }) => {
        setResults(data.data?.results ? data.data.results : []);
        setCurrentPage(pageNumber)
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <FlexBox
      className="result-wrapper">
      {isLoading ?
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
        :
        hasError ?
          <h4>Got an error, please try again !</h4>
          :
          totalCount > 0 ?
            <>
              <CharactersSection results={results}/>
              <Pagination paginate={paginate} totalCount={totalCount} currentPage={currentPage}/>
            </>
            :
            <h4>No results found!</h4>
      }
    </FlexBox>
  );
};


export default Results;
