import React, { useState } from 'react'
import './Contact.scss'
import CustomButton from '../Component/CustomButton/CustomButton'

function Contact() {

  const [data, setData] = useState({
    email : '',
    name : '',
    phone : '',
    message : '',
  })

 const handleChange = (event) => {
  console.log(event.target.value)
  console.log(event.target.name)

    const name = event.target.name
    const value = event.target.value
    
    setData(name, value)

   
  }

 const handleSubmit = (event) => {
    event.preventDefault()
    alert('Form submission')
    setData({
      email : '',
      name : '',
      phone : '',
      message : '',
    })
  }



  return (
    <div>
       <div className="row">
        <h1>Contact Us</h1>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.72022859938!2d76.82493432461801!3d28.423160294158492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1690783416492!5m2!1sen!2sin"
       width="600"
        height="100vw"
         style={{border: 0}}
         allowFullScreen="" 
         loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
     


    <div className="container">
     
      <div className="row">
        <h4 style={{ textAlign: 'center' }}>We'd love to hear from you!</h4>
      </div>
      <div className="row input-container">
        <div className="col-xs-12">
          <div className="styled-input wide">
            <input type="text" required onChange={handleChange} value={data.name}  />
            <label>Name</label>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="styled-input">
            <input type="text" required onChange={handleChange} value={data.email} />
            <label>Email</label>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="styled-input" style={{ float: 'right' }}>
            <input type="text" required onChange={handleChange} value={data.phone}/>
            <label>Phone Number</label>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="styled-input wide">
            <textarea required onChange={handleChange} value={data.message}/>
            <label>Message</label>
          </div>
        </div>
        <div className="col-xs-12">
        <CustomButton type='submit' onClick={ handleSubmit}  > Send message</CustomButton>
        </div>
      </div>
    </div>




    </div>
  )
}

export default Contact
