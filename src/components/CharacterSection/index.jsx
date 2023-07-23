import React from 'react';
import { AspectRatio, List } from '@lumx/react';
import { ListItem, Size, Thumbnail } from '@lumx/react';


const CharacterSection = ({ results }) => {


  return (
    <List>
      {
        results.map((result, index) => (
          <ListItem
            key={index}
            size={Size.big}
          >
            <Thumbnail
              image={result.thumbnail.path + '.' + result.thumbnail.extension}
              alt="Marvel-character"
              aspectRatio={AspectRatio.original}
              size={Size.xl}
            />
            <span>{result.name}</span>
          </ListItem>
        ))
      }
    </List>
  );
};


export default CharacterSection;
