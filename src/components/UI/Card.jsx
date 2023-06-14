import React from 'react'

const Card = (props) => {
  return (
    <div className={`bg-white p-5 rounded-xl ${props.className}`}>{props.children}</div> // AddWorker icinde ki <Cart> props ile classname alip yazdim .
  )
}

export default Card;