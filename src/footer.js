import React from 'react';

class Footer extends React.Component {
  render () {
    const { frase } = this.props;
    return (
      <footer className= 'footer'>
        <p>{ frase }</p>
        <img className= 'symbol' src="images/symbol.png" alt="Copywrite symbol" />
      </footer>
    )
  }
}

export default Footer;