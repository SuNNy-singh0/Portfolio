import React from 'react'

function Service() {
  const openUrl = (url) => {
    window.open(url, '_blank');
  };
  return (
    <>
      <div id='maincontainer'>
        <h1 className='head'>Projects</h1>
        <div className='project'>
          <div className='pro1'>
            <h3>Application Tracker System</h3>
            <h4>Skill:- HTMl, CSS, ReactJs , SpringBoot, Oracle DB, Mail API</h4>
            <p>Our project aims to develop a modern Applicant Tracking System (ATS)
              utilizing Spring Boot for the backend and React for the frontend.
              This system will streamline the recruitment process by allowing recruiters
              to post job listings, manage applicants, and track their progress.
            </p>
            <button className='btn3' onClick={()=>openUrl('https://github.com/SuNNy-singh0')}>See it</button>
          </div>
          <div className='pro1'>
            <h3>Human nature Prediction System</h3>
            <h4>Skill:- HTMl, CSS,Javascript,Algorithm design</h4>
            <p>Project can predict human nature by Date of Birth & Name.
              It uses Numerology Concept Which is Subset of Astrology.
              85% Accurate on User Reviews Basis.</p>
            <button className='btn3' onClick={()=>openUrl('https://sunny-singh0.github.io/numerology/')}>See it</button>
          </div>
          <div className='pro1'>
            <h3>Online Examination System</h3>
            <h4>Skill:- HTMl, CSS, ReactJs , Spring MVC, Oracle DB</h4>
            <p>In this Project Student Give MCQ Based Exam and Set his Score as per performance.
              Teacher & Admin Can Create the Exam , Update the Exam & Schedule the time When Exam Start.
              Project Implement Concepts like Authorization & Authentication , Encapsulation.</p>
            <button className='btn3' onClick={()=>openUrl('https://sunny-singh0.github.io/numerology/')}>See it</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service