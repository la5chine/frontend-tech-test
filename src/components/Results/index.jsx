import React from 'react';
import CharactersSection from '../CharactersSection';
import Pagination from '../Pagination';


const Results = ({ results, totalCount }) => {


  return (
    <>
      <CharactersSection results={results}/>
      <Pagination totalCount={totalCount}/>
    </>
  );
};


export default Results;
