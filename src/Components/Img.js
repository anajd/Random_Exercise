import React from 'react';

class Img extends React.Component {
  render() {
    return (
      <img src={this.props.src} className="App-logo" alt={this.props.alt} />
    );
  }
}

export default Img;
