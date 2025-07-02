import React, { useState } from "react";

const ProfileInfo = () => {
  const [contactForm, setContactForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactForm(false);
    alert("Form Submitted ✅");
  };

  return (
    <div className="container">
      <div className="profile-card">
        <img
          className="profile-img"
          src="/SakethPortfolioImage3.jpg"
          alt="Profile"
        />
        <h2 className="role">MERN Full Stack Developer</h2>
        <p className="jobInfo">Open to Full-time & Internship</p>

        <h3 className="name">Saketh Ram Pusluru</h3>
        <p className="location">📍 Hyderabad, Telangana</p>
        <p className="bio">
          Enthusiastic Full Stack Developer skilled in the MERN stack with
          strong foundations in AI. Eager to contribute to real-world web
          applications through innovative, scalable code in a collaborative
          development environment.
        </p>

        <div className="buttons">
          <button
            className="cv-btn"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1juKDAZBLxqmmF5QnArUfudW6chFj4yT0/view?usp=drive_link",
                "_blank"
              )
            }
          >
            VIEW CV
          </button>
          <button className="contact-btn" onClick={() => setContactForm(true)}>
            Contact Me
          </button>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/saketh-cell"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/saketh-pusuluru-a614b6279"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
        </div>
      </div>

      {/* Modal Contact Form */}
      {contactForm && (
        <div className="modal">
          <div className="form-container">
            <h2>Let’s Talk!</h2>
            <p className="form-subtitle">
              Fill out the form below to get in touch.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" required />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <div className="form-buttons">
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setContactForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
