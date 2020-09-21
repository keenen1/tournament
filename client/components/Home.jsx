import React from 'react'

const Home = () => {
  return (
    <>
      <div className="home-page col-12">
        {/* <div className="labour col-12">Labour Weekend</div>
        <div className="weekend col-12">Basketball</div>
        <div className="year col-12">2020</div> */}
        <div className="logo" style={{ display: 'block' }}>
          <img src="./images/just-logo.gif" alt="Logo" width="150" />
          <div style={{ fontFamily: 'Montserrat', fontSize: '100px', color: 'white' }}>
            <span>L</span>
            <span>A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
            <span>R</span>
          </div>
          <div style={{ fontFamily: 'Montserrat', fontSize: '100px', color: 'white' }}>
            <span>W</span>
            <span>E</span>
            <span>E</span>
            <span>K</span>
            <span>E</span>
            <span>N</span>
            <span>D</span>
          </div>
          <div style={{ fontSize: '30px', color: '#FF66C4' }}>AUCKLAND 2020</div>
        </div>
      </div>
    </>
  )
}

export default Home
