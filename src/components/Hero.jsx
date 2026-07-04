import React from 'react'
import swiggy from '../pictures/swiggy.webp';
import zomato from '../pictures/zomato.webp';
import kfc from "../pictures/kfc_png.webp";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <span className="title">TASTE THE ULTIMATE CHICKEN EXPERIENCE.</span>
        <p>
          Craving something crispy, juicy, and unforgettable?
           You've come to the right place! 
           Every meal is made to bring you the perfect combination of bold flavors,
            golden crunch, and mouthwatering goodness.
            From our signature fried chicken and delicious burgers to tasty wraps, 
            crispy fries, and refreshing drinks, 
            there's something for every craving.
            We believe that great food isn't just about eating
            —it's about creating happy moments with family and friends.
            Every order is prepared with care using fresh ingredients to ensure quality you can taste in every bite. 
            Whether you're enjoying a quick lunch, celebrating a special occasion, or simply treating yourself,
            we're here to make every meal memorable.
            Explore our exciting menu, discover irresistible combo deals,
            and experience flavors that keep you coming back for more. 
            Take your first bite, enjoy the crunch,
            and let every meal turn into a delicious celebration. 
            Your next favorite meal is waiting—order now and make today extra tasty!
        </p>
       <div className="btns">
         <button className="btn1">ORDER NOW</button>
         <button className='btn2'>KFC CHICKEN</button>
       </div>
       <div className="social">
        <span className="social-1">
          Also Available On
          <div className="social-icons">
            <img src={swiggy} alt="" />
            <img src={zomato} alt="" />
          </div>
        </span>
       </div>
      </div>
      <div className="right">
        <img src={kfc} alt="" />
      </div>
    </div>
  )
}

export default Hero