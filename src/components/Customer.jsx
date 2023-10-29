import React from 'react'
import "./customer.css"
import CustomerCard from './CustomerCard'
import user1 from "../images/pic1.png"
import user2 from "../images/pic2.png"
import user3 from "../images/pic3.png"

const Customer = () => {
  return (
    <section id='customer-container'>
      <h1 className='center main-heading'>Customer's Review</h1>
      <div className="dish-container">
         <CustomerCard userimg={user1} username={"Sofia Azura"} />
         <CustomerCard userimg={user2} username={"John Deo"} />
         <CustomerCard userimg={user3} username={"Vicoria Zoe"} />
      </div>
    </section>
  )
}

export default Customer
