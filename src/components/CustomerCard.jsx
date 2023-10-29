import React from 'react'
import "./customer.css"
import img from "../images/pic1.png"

const CustomerCard = ({userimg,username}) => {
  return (
    <div className='dish-content'>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati excepturi voluptatem rerum delectus, quia incidunt distinctio? Alias architecto unde accusantium.</p>
       <div className="user">
            <img src={userimg} alt="" />
            <span>{username}</span>
       </div>
    </div>
  )
}

export default CustomerCard
