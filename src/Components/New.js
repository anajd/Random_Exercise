import React from 'react';

const New = ({ news, url, likes }) => (
  <React.Fragment>
    <p className="new">{news}</p>
    <div className="read__more">
      <a className="read__link" href="#">
        {url}
      </a>
      <p className="like">
        {likes}
        <i className="fas fa-heart" />
      </p>
    </div>
  </React.Fragment>
);

export default New;
