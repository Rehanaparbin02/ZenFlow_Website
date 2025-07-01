import React from 'react';
import './css/contact.css';
import Swal from 'sweetalert2';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "a6dacb6a-7e0c-4f60-983c-c3fdcbf19431");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Submitted!",
          text: "We'll get back to you soon!",
          icon: "success",
          confirmButtonColor: "#6c47ff",
        });
        event.target.reset();
      } else {
        Swal.fire({
          title: "Not Submitted!",
          text: data.message || "Please try again!",
          icon: "error",
          confirmButtonColor: "#6c47ff",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong!",
        icon: "error",
        confirmButtonColor: "#6c47ff",
      });
      console.error("Submission Error:", error);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Get In Touch</h2>

      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-card">Map / Info / Graphic</div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="input-box">
              <label>Full Name</label>
              <input
                type="text"
                className="field"
                placeholder="Enter your name"
                name="name"
                required
              />
            </div>

            <div className="input-box">
              <label>Email Address</label>
              <input
                type="email"
                className="field"
                placeholder="Enter your email"
                name="email"
                required
              />
            </div>

            <div className="input-box">
              <label>Phone Number</label>
              <input
                type="tel"
                className="field"
                placeholder="Enter your phone number"
                name="phone"
                pattern="^[0-9\\-\\+\\s\\(\\)]*$"
                required
              />
            </div>

            <div className="input-box">
              <label>Your Message</label>
              <textarea
                className="field mess"
                placeholder="Enter your message"
                name="message"
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
