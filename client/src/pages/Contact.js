import React from 'react';
import './contact.css';
const Contact = () => {
 



    const sendEmail = (e) => {
        e.preventDefault()
        
    };
   
  return (
    <div className="container">
       <h1>ContactMe</h1>
        <form  className="form" onSubmit={sendEmail}>
        <div className="form-field">
      <label>Name</label>
      <input type="text" name="name" placeholder="Choose a Name" />
      </div>
      <div className="form-field">
      <label>Email</label>
      <input type="email" name="email" placeholder="Enter your email" />
      </div>
      <div className="form-field">
      <label>Message</label>
      <textarea name="message" cols={30} raws={6} />
      </div>
      <div className="form-field">
      <button className="btn" type="submit" value="Send">Send</button>
      </div>
    </form>
    </div>
  )
}

export default Contact