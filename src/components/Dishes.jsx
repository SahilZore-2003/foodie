import React from 'react'
import img from "../images/img1.jpg"
import "./dishes.css"
import data from "../data/dish.json"

const Dishes = () => {
    return (
        <section>
            <h1 className='center main-heading'>Our Dishes</h1>

            <div className="dish-container">
                {
                    data.map((e) => {
                        return (
                            <div className="dish-content" key={e.id}>
                                <img src={img} alt="" />
                                <h1 className='center'>{e.name}</h1>
                                <div className="rating-div center">
                                    <i className="fa-regular fa-star rated"></i>
                                    <i className="fa-regular fa-star rated"></i>
                                    <i className="fa-regular fa-star rated"></i>
                                    <i className="fa-regular fa-star rated"></i>
                                    <i className="fa-regular fa-star "></i>
                                </div>
                                <div className="price">
                                    <h2>{e.price} RS</h2>
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Dishes
