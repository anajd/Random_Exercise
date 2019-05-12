import React from 'react';
import logo from '../logo.svg';
import '../MediaCard.scss';
import UserProfile from './UserProfile';
import Date from './Date';
import Img from './Img';
import New from './New';

class MediaCard extends React.Component {
  render() {
    const { name, surname, news, likes } = this.props;
    return (
      <div className="App">
        <main className="App-main">
          <div className="user">
            <div className="user__profile">
              <Img src={logo} alt="logo" />
              <div className="name__profile">
                <UserProfile name={name} surname={surname} />
                <Date date="Lunes 26 de junio de 2017" />
              </div>
            </div>
            <New news={news} url="Leer más..." likes={likes} />
          </div>
        </main>
      </div>
    );
  }
}

export default MediaCard;
