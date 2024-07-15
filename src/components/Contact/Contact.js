import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact">
        <h2>Contact Us</h2>
        <form>
          <label>Name:</label>
          <input type="text" name="name" required />

          <label>Email:</label>
          <input type="email" name="email" required />

          <label>Message:</label>
          <textarea name="message" required></textarea>

          <button type="submit">Submit</button>
        </form>
        <div className="contact-details">
          <p>Address: 123 Street, City, Country</p>
          <p>Phone: +123 456 7890</p>
          <p>Email: info@curtilageshelter.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
