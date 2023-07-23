import React from 'react';
import CharactersSection from '../CharactersSection';
import Pagination from '../Pagination';
import { searchCharacters } from '../../api';


const Results = ({
  setResults,
  results,
  totalCount,
  searchTerm
}) => {
  const paginate = (pageNumber) => {
    searchCharacters(searchTerm, (pageNumber - 1) * 4)
      .then(({ data }) => setResults(data.data?.results ? data.data.results : []));
  };

  return (
    <>
      <CharactersSection results={results}/>
      <Pagination paginate={paginate} totalCount={totalCount}/>
    </>
  );
};


export default Results;
