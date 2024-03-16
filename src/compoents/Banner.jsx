import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
function Banner() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Backend Developer", "full Stack Java Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 75,
      backSpeed: 100,
      backDelay: 100,
      loop:true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
    <div className='banner'>
        <div className='left'>
            <h3>Hi, I am</h3>
            <h1>Sunny</h1>
            <h2>I am <span ref={el}></span></h2>
            <p>I am pursing BTech in Computer Science  From Mdu rohtak.
              I Have deep in java language so i Choose spring Framework for Backend Technology.
               and I use React Js Frame work in Frontend . 
               I am Efficient in api Designing and api Integration.
               My Strength is my will  & consitency</p>
           
           <div className='icon'>
            <a href='https://leetcode.com/sunny_nice123/'><img  src='/images/leetcode.png'></img></a>
            <a href='526sunnysinghcse1@gmail.com'><img src='/images/gmail.png'></img></a>
            <a href='https://www.linkedin.com/in/sunny-java/'><img src='/images/linkedin.png'></img></a>
            <a href='https://github.com/SuNNy-singh0'><img src='/images/github.png'></img></a>
           </div>
          
        </div>
        <div className='Right'>
           <img src='./images/21.png'></img>
        </div>
    </div>
    </>
  )
}

export default Banner