import React from 'react'

const Info = () => {
  return (
    <div className="info-page col-12">
      <div className="info-container col-12">
        {/* <div className="info-date col-12">
          <div>JANUARY 2021</div>
          <div>9 | 10</div>
        </div> */}
        <div className="info-map col-12">
          <div>
            <iframe
              className="map-box" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12781.918625780005!2d174.7437492!3d-36.7830485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x151a15700a36587f!2sEventfinda%20Stadium!5e0!3m2!1sen!2snz!4v1605606888988!5m2!1sen!2snz" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0">
            </iframe>
          </div>
          <a href="https://goo.gl/maps/vn3WzfeDxgw7ZZBH6">
            Eventfinda Stadium <img src="./images/map-marker.png" />
          </a>
          <div className="info-city col-12">
            Northshore, Auckland
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
