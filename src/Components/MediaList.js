import React from 'react';
import MediaCard from './MediaCard';

class MediaList extends React.Component {
  render() {
    return (
      <ul className="cards_list">
        <li>
          <MediaCard
            name="Ana"
            surname="Jame"
            news="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            likes="40"
          />
        </li>
        <li>
          <MediaCard
            name="Libertad"
            surname="Chapinal"
            news="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
            likes="50"
          />
        </li>
        <li>
          <MediaCard
            name="Sara"
            surname="Cabezas"
            news="Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            likes="60"
          />
        </li>
      </ul>
    );
  }
}

export default MediaList;
