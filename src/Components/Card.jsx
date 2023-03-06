import React from 'react'

function Card(props) {
  return (
    <div className=''>
      <img src={props.image} alt='' className='nft-img'/>
      <h3>{props.name}</h3>
    </div>
  )
}

export default Card
