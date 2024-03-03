import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div  className="footer">
        <div>
        <h1>Family Wellness Massage Therapy</h1>
        <p>9876 Main Street, Suite 123, Mainland, ML12345</p>
        <p>Phone:987-654-3210</p>
        </div>
        <div className='copyright'>
            <p>Copyright 2018, Website.com. All Rights Reserved</p>
        </div>
        <div>
            <p  style={{fontSize:"22px", fontWeight:"300"}}>
            Powered by Website.com
            </p>
        </div>
    </div>
  )
}

export default Footer