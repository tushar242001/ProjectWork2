import React from "react";
import "./contact.module.css"

const Contact = () => {
  return (

    <div>
    
    <h2 className="common-heading">Feel Free to Contact us</h2>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 ,marginBottom:80}}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>


    <div className="contact-form">
      <form
        action="https://formspree.io/f/xwkjyrjb"
        method="POST"
        className="contact-inputs">
        <input
          type="text"
          name="username"
          placeholder="username"
          autoComplete="off"
          required
        />

        <input
          type="email"
          name="Email"
          placeholder="Email"
          autoComplete="off"
          required
        />

        <textarea
          name="message"
          placeholder="Type your message"
          cols="30"
          rows="6"
          autoComplete="off"
          required></textarea>

        <input type="submit" value="send" />
      </form>
    </div>
  </div>
      
  );
};

export default Contact;
