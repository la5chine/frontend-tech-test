import React from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';
import { get } from '../../api';

const Search = ({ setResults, setTotalCount }) => {


  const fetchUserData = (text) => {
    get("characters", {nameStartsWith: text, limit: 4})
      .then(({ data }) => {
        setTotalCount(data.data?.total ? data.data.total : 0);
        setResults(data.data?.results ? data.data.results : []);
      })
  };
  return (
    <TextField theme={Theme.dark} placeholder="Search ..."
               icon={mdiMagnify} onChange={fetchUserData}/>
  );
};

export default Search;
