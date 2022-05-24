import React , { useRef ,useState} from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
const Contact = () => {
 
 

      const [result , setResult] = useState(false)
      const form = useRef();
  
      const sendEmail = (e) => {
        e.preventDefault();
        
        

    emailjs.sendForm('service_ch0dw1k', 'template_mgbx899', form.current, 'PARqaGz3Gb7nzRd70')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    setResult(true)
    e.target.reset()
    setTimeout(()=>setResult(false),5000)
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