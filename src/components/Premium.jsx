import React from 'react'
import "./premium.css"
import Card from './Card'
import img1 from "../images/menu1.jpg"
import img2 from "../images/menu2.jpg"
import img3 from "../images/menu3.jpg"


const Premium = () => {
    return (
        <section>
            <h1 className='center main-heading'>Premium Menu</h1>
            <div className="dish-container">
                <Card id={1} productname={"Dilicious Dish"} price={300} img={img1}
                />
                <Card id={2} productname={"Dilicious Dish"} price={450} img={img2}
                />
                <Card id={3} productname={"Dilicious Dish"} price={500} img={img3}
                />
            </div>
        </section>
    )
}

export default Premium
