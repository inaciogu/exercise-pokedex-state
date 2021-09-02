import React from 'react';
import './style.css'

class Button extends React.Component {
  render () {
    const { children, onClick, className } = this.props;
    return (
      <button 
      onClick= { onClick }
      className={ className }>
        { children }
      </button>
    )
  }
}

export default Button;