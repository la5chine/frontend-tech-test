import React, { useState } from 'react';
import Header from '../Header';
import Results from '../Results';


const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  return (
    <>
      <Header setResults={setResults} setTotalCount={setTotalCount} setSearchTerm={setSearchTerm}/>
      {totalCount > 0 && <Results setResults={setResults} results={results} totalCount={totalCount} searchTerm={searchTerm}/>}
    </>
  );
};

export default MainPage;
