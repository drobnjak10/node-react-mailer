import React, { useState } from "react";
import "./contact.scss";
import { HiLocationMarker } from "react-icons/hi";

const Contact = () => {
  const [mail, setMail] = useState({
    name: '',
    email: '',
    message: ''
  });

  const send = async (e) => {
    console.log('send')
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mail)
      });

      const data = await response.json();
      if(data.success) {
        window.location.reload('/')
      }

    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          repellendus quas nesciunt harum ipsam culpa!
        </p>
        <div className="row">
          <div className="info">
            <div>
              <div className="icon">
                <HiLocationMarker size={20} />
              </div>
              <div className="text">
                <h4>Address</h4>
                <p>4671 Sugar Camp Road</p>
                <span>55060</span>
              </div>
            </div>
            <div>
              <div className="icon">
                <HiLocationMarker size={20} />
              </div>
              <div className="text">
                <h4>Phone</h4>
                <p>5057-590-659-156</p>
              </div>
            </div>
            <div>
              <div className="icon">
                <HiLocationMarker size={20} />
              </div>
              <div className="text">
                <h4>Email</h4>
                <p>emailemail@email.com</p>
              </div>
            </div>
          </div>
          <div className="form">
            <form onSubmit={send}>
              <h3>Send Message</h3>
              <div className="form-group">
                <input type="text" placeholder="Full Name" defaultValue={mail.name} onChange={e => setMail({...mail, name: e.target.value })} required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" defaultValue={mail.email} onChange={e => setMail({...mail, email: e.target.value })} required />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Type your message..."
                  id=""
                  cols="10"
                  rows="10"
                  defaultValue={mail.message}
                  onChange={e => setMail({...mail, message: e.target.value })}
                  required 
                ></textarea>
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
