import React from 'react'

const Cards = (props) => {
      let str="number";
  return (
    <div className='card'>
           <h1> Card {str} {props.number} is {props.color}</h1>
    </div>
  )
}

export default Cards