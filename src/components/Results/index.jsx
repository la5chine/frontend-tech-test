import React from 'react';
import CharactersSection from '../CharactersSection';
import Pagination from '../Pagination';
import { searchCharacters } from '../../api';
import { FlexBox } from '@lumx/react';


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
    <FlexBox className="lumx-flex-box--orientation-vertical lumx-flex-box--v-align-center">
      <CharactersSection results={results}/>
      <Pagination paginate={paginate} totalCount={totalCount}/>
    </FlexBox>
  );
};


export default Results;
