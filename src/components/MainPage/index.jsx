import React, { useState } from 'react';
import Header from '../Header';
import Results from '../Results';


const MainPage = () => {
  const [results, setResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  return (
    <>
      <Header setResults={setResults} setTotalCount={setTotalCount}/>
      <Results results={results} totalCount={totalCount}/>
    </>
  );
};

export default MainPage;
