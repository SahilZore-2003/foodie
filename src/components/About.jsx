import React from 'react'
import aboutimg from "../images/about.png"
import "./about.css"

const About = () => {
  return (
    <section id='about-container'>
      <div>
        <img src={aboutimg} alt="" />
      </div>
      <div>
        <h1>Why Choose Us?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, at quo? Sapiente pariatur voluptatem sunt quia itaque minus? Porro maxime nam iusto architecto ipsam sed consequatur eius eos soluta qui.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, aliquid?</p>
        <button>Learn More</button>
      </div>
    </section>
  )
}

export default About
