import React from 'react'
import './Body.css'
import Button from './Button'
function Body() {
  return (
    <div>
        <div className='img-div'>
            <img src='https://images.unsplash.com/photo-1526225294770-079fcbe68745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        </div>
        <div className='icon'><i class="gg-code"></i></div>
        <div className="content">
            <h1>Think Health. Think Massage.</h1>
            <p>
                We are open from 9am to 6pm; Monday through Sunday. If you  would like to schedule an appointment with us, please call us at 987-654-3210 today!
            </p>
            <div className='btns'>
            <Button>LEARN MORE ABOUT US</Button>
            <Button>CONTACT US TODAY</Button>
            </div>
            </div>
            <div className='text'>
                <p className='colored-text'>
                    Are you looking for a professional, registered  massage therapist? Sample Massage Therapy has 4 registered massage therapist who can provide clinical massage.
                </p>
                <p>
                    We are committed to your long term  health and well-being. Our multi-disciplinary clinic provides a balanced approach to a healthy lifestyle. Enhance your health and improve your perfomance with our treatments.
                </p>
                <p>
                    We welcome you to come explore all the benefits you'll enjoy as one of our valued guests. Our professional staff is committed to offering the best massage therapy in Mainland.

                </p>
                <hr/>
            </div>
    </div>
  )
}

export default Body