import React from 'react';

const UserProfile = ({ name, surname }) => {
  const complete = `${name} ${surname}`;
  return <h1 className="name">{complete}</h1>;
};

export default UserProfile;
