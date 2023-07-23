import React from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';
import { searchCharacters } from '../../api';

const Search = ({ setResults, setTotalCount, setSearchTerm }) => {


  const fetchUserData = (searchTerm) => {
    setSearchTerm(searchTerm);
    searchCharacters(searchTerm)
      .then(({ data }) => {
        setTotalCount(data.data?.total ? data.data.total : 0);
        setResults(data.data?.results ? data.data.results : []);
      });

  };
  return (
    <TextField theme={Theme.dark} placeholder="Search ..."
               icon={mdiMagnify} onChange={fetchUserData}/>
  );
};

export default Search;
