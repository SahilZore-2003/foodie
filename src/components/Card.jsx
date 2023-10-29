import React from 'react'

const Card = ({id,productname,price,img}) => {
  return (
    <div className="dish-content" key={id}>
    <img src={img} alt="" />
    <h1 className='center'>{productname}</h1>
    <div className="rating-div center">
        <i className="fa-regular fa-star rated"></i>
        <i className="fa-regular fa-star rated"></i>
        <i className="fa-regular fa-star rated"></i>
        <i className="fa-regular fa-star rated"></i>
        <i className="fa-regular fa-star "></i>
    </div>
    <div className="price">
        <h2>{price} RS</h2>
        <button>Buy Now</button>
    </div>
</div>
  )
}

export default Card
