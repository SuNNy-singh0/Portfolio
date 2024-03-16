import React from 'react'
function header() {
  return (
    <>
     <div className='Head'>
    <div className='main'>
        <h1>Sunny Singh</h1>
    </div>
    <div className='item'>
        <a href='#' className='home'>
            Home
        </a>
        <a href='#container'className='home' >
            About
        </a>
        <a href='#maincontainer'>
            Project
        </a>
        <a href='#expert'>
            Contact
        </a>
    </div>
    <div>
        <button className='btn1'>HireMe</button>
    </div>
    </div>
    </>
  )
}

export default header