import React from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';

const Search = ({ setResults }) => {


  const fetchUserData = (text) => {
    const params = new URLSearchParams({apikey: '8fb61ed0d8ae4cc76943c8d2b8e2ed9c', nameStartsWith: text})
    const endpoint = 'https://gateway.marvel.com:443/v1/public/characters?' + params

    fetch(endpoint)
      .then(response => {
        return response.json();
      })
      .then(({ data }) => {
        setResults(data?.results ? data.results : []);
      });
  };
  return (
    <TextField theme={Theme.dark} placeholder="Search ..."
               icon={mdiMagnify} onChange={fetchUserData}/>
  );
};

export default Search;
