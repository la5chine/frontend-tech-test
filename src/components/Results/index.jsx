import React from 'react';
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
  hasError
}) => {
  const paginate = (pageNumber) => {
    searchCharacters(searchTerm, (pageNumber - 1) * 4)
      .then(({ data }) => setResults(data.data?.results ? data.data.results : []));
  };

  return (
    <FlexBox className="lumx-flex-box--orientation-vertical lumx-flex-box--v-align-center">
      { isLoading ?
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
        :
        totalCount > 0 ?
        <>
          <CharactersSection results={results}/>
          <Pagination paginate={paginate} totalCount={totalCount}/>
        </>
        :
        <h4>No results found!</h4>
      }
    </FlexBox>
  );
};


export default Results;
