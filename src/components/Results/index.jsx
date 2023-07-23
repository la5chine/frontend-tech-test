import React from 'react';
import { AspectRatio, List } from '@lumx/react';
import { ListItem, Size, Thumbnail } from '@lumx/react';
import CharacterSection from '../CharacterSection';


const Results = ({ results }) => {


  return (
    <CharacterSection results={results}/>
  );
};


export default Results;
