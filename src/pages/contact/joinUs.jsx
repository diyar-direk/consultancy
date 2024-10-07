import React from "react";
import "./contact.css";
const JoinUs = () => {
  return (
    <>
      <main className="contact-landing join landing-img flex">
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

          <label htmlFor="file" className="inp">
            <input type="file" id="file" />
            <i className="fa-solid fa-file"></i>
            click here to upload your CV
          </label>

          <textarea
            name=""
            id="message"
            rows={5}
            placeholder="please write your message"
          ></textarea>
          <button className="btn2">submit</button>
        </form>
      </main>
    </>
  );
};

export default JoinUs;
