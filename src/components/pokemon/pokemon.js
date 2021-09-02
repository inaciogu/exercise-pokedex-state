import React from 'react';
import './style.css'

class Pokemon extends React.Component {
  render () {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className = 'pokemon'>
        <div>
          <p>{name}</p>
           <p>{type}</p> 
           <p>average Weight: {averageWeight.value} {averageWeight.measurementUnit} </p>
        </div>
         <div> <img src = {image} alt= {`${name} sprite`} ></img> </div>
      </div>
    )
  }
}

export default Pokemon;