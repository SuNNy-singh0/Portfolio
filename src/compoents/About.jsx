import React from 'react'

function About() {
    return (
        <>
            <div id='container'></div>
            <h1 className='head'> About me</h1>
            <div className='content'>
                <div className='left1'>
                    <img src='./images/test2.jpg'></img>
                </div>
                <div className='right1'>

                    <h3>Java FullStack Developer</h3>
                    <p><span className='line'>I am doing BTech in Computer Science and Engineering From UIET Mdu Rohtak & having passing year 2024</span>
                        <br></br>
                        <br></br>
                        <span className='line'>my Relevant CourseWork is Computer Networks, Object-Oriented Programming,
                        Operation System , DBMS.</span> 
                        <br></br>
                        <br></br>
                        <span className='line'>I Efficient in Ui Designing , Website Work , Api Designing and Integration & Deploying Application on Cloud.</span>

                    </p>
                   <button className='btn2'><a href='Resume.pdf' download>See Resume</a></button>
                </div>
            </div>
        </>
    )
}

export default About