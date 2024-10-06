import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <main className=" relative center">
        <div className="contact flex container section-color ">
          <div className="image">
            <img src={require(`./contact2.jpg`)} alt="" />
          </div>
          <form className="contact-form ">
            <div className="logo flex ">
              <img src={require(`../../components/logo.png`)} alt="" />
              <span>blue elite tech</span>
            </div>
            <div className="text">
              <h1>Let's get in touch.</h1>
              <p>
                Or just reach manually to
                <a target="_b lank" href="mailto:info@blue-elite.tech">
                  info@blue-elite.tech
                </a>
              </p>
            </div>
            <div className="input name flex">
              <div className="labal first">
                <label htmlFor="contact-first">First Name</label>
                <div className="input-contatiner">
                  <i class="fa-regular fa-user"></i>
                  <input
                    type="text"
                    id="contact-first"
                    className="contact-input"
                    placeholder="Enter your first name..."
                  />
                </div>
              </div>

              <div className="labal second">
                <label htmlFor="contact-second">Last Name</label>
                <div className="input-contatiner">
                  <i class="fa-regular fa-user"></i>
                  <input
                    type="text"
                    id="contact-second"
                    className="contact-input"
                    placeholder="Enter your last name..."
                  />
                </div>
              </div>
            </div>

            <div className=" input email">
              <label htmlFor="contact-email">Email Address</label>
              <div className="input-contatiner">
                <i class="fa-regular fa-envelope"></i>
                <input
                  type="email"
                  id="contact-email"
                  className="contact-input"
                  placeholder="Enter your Email Address..."
                />
              </div>
            </div>

            <div className=" input phone-number">
              <label htmlFor="contact-phone">Phone Number</label>
              <div className="input-contatiner">
                <i class="fa-solid fa-phone"></i>
                <input
                  type="email"
                  id="contact-phone"
                  className="contact-input"
                  placeholder="phone number..."
                />
              </div>
            </div>

            <div className="input message">
              <label htmlFor="contact-message">Message</label>
              <div className="text-contatiner">
                <textarea
                  type="text"
                  id="contact-message"
                  className="contact-input"
                  maxLength={300}
                  rows={4}
                  placeholder="Enter your main text here..."
                />
              </div>
            </div>
            <button className="btn2 contact-button">
              Submit Form <i class="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Contact;
