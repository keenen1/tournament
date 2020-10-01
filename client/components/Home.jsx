import React from 'react'

const Home = () => {
  return (
    <>
      <div className="home-page col-12">
        {/* <div className="labour col-12">Labour Weekend</div>
        <div className="weekend col-12">Basketball</div>
        <div className="year col-12">2020</div> */}
        <div className="logo">
          <img src="./images/just-logo.gif" alt="Logo" />
          <div className="title">
            <span>L</span>
            <span>A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
            <span>R</span>
          </div>
          <div className="title">
            <span>W</span>
            <span>E</span>
            <span>E</span>
            <span>K</span>
            <span>E</span>
            <span>N</span>
            <span>D</span>
          </div>
          <div className="year">AUCKLAND 2020</div>
        </div>
      </div>
    </>
  )
}

export default Home
