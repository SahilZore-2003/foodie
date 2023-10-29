import React,{useState} from 'react'
import "./navbar.css";

const Navbar = () => {
  const [nav,setNav] = useState(false)
  const shownav = ()=>{
    setNav(!nav)
  }
  return (
    <nav>
      <h1><i className="fa-solid fa-fire-burner"></i>FoodieWeb</h1>
      <div>
        <div className={nav ?"links active" :"links"}>
          <a href="">Home</a>
          <a className='downmenu' href="">Dishes<i className="fa-solid fa-angle-down"></i>
            <div className="otherlinks">
              <a href="">Spicy</a>
              <a href="">Crispy</a>
              <a href="">delicious</a>
              <a href="">Tasty</a>
            </div>
          </a>
          <a href="">About</a>
          <a href="">Menu</a>
          <a href="">Reviews</a>
          <button>Login</button>
        </div>
        <i className="fa-solid fa-bars" id='navicon' onClick={shownav}></i>
      </div>

    </nav>
  )
}

export default Navbar
