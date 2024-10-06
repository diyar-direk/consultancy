import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <main className=" contact-landing flex">
        <div className="image center flex-direction ">
          <div className="overlay"></div>

          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing
            <br /> elit. Laboriosam, explicabo.
          </p>
          <div className="social between">
            <div className="center">
              <i className="fa-solid fa-phone"></i>
              <a target="_blank" href="">
                04328432
              </a>
            </div>
            <div className="center">
              <i className="fa-solid fa-envelope"></i>
              <a target="_blank" href="">
                diyardireki111@gmail.com
              </a>
            </div>
            <div className="center">
              <i className="fa-solid fa-location-dot"></i>
              <a target="_blank" href="">
                syria - alhasaka
              </a>
            </div>
          </div>
        </div>
        <form className=" center flex-direction gap-20 section-color ">
          <div>
            <h2>contact us right now</h2>
            <p>
              Please complete the form below and the seller will receive your
              message.
            </p>
          </div>
          <div className="inp ">
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              name=""
              id="name"
              placeholder="please write your full name"
              required
            />
          </div>
          <div className="inp">
            <i className="fa-solid fa-phone"></i>
            <input
              type="text"
              name=""
              id="phone"
              placeholder="please write your phone number"
              required
            />
          </div>
          <div className="inp">
            <i className="fa-solid fa-envelope"></i>
            <input
              type="email"
              name=""
              id="email"
              placeholder="please write your email"
              required
            />
          </div>
          <textarea
            name=""
            id="message"
            rows={5}
            placeholder="please write your message"
          ></textarea>
          <button className="btn2">submit</button>
        </form>
      </main>
      {/* <main className=" relative center">
        <div className="contact flex container section-color ">
          <div className="image">
            <img src={require(`../home/pexels-fauxels-3184416.jpg`)} alt="" />
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
      </main> */}
    </>
  );
};

export default Contact;
