import React from 'react'

const Info = () => {
  return (
    <div className="info-page col-12">
      <div className="info-container col-12">
        <div className="info-date col-12">
          <div>October 2020</div>
          <div>24 | 25</div>
        </div>
        <div className="info-map col-12">
          <a href="https://goo.gl/maps/9vjkns6LLeQC5ffE8">
            Bruce Pulman Arena <img src="./images/map-marker.png" />
          </a>
          <div className="info-city col-12">
            Takanini, Auckland
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
