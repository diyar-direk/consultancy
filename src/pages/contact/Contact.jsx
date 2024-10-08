import React, { useContext, useState } from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
const Contact = () => {
  const context = useContext(Context);
  const language = context.language && context.language;
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  function handleForm(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }
  return (
    <>
      <main className=" contact-landing wrap landing-img flex">
        <div className="image center flex-direction ">
          <div className="overlay"></div>

          <h1> {language.contact && language.contact.left_header}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sunt
            ipsa! Sapiente tempora voluptatibus asperiores repellat illum
            voluptatem, libero exercitationem deserunt quas qui veritatis
            aperiam accusamus aliquid, aliquam assumenda illo?
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
              onInput={handleForm}
              type="text"
              name=""
              id="name"
              placeholder="please write your full name"
              required
              value={form.name}
            />
          </div>
          <div className="inp">
            <i className="fa-solid fa-phone"></i>
            <input
              onInput={handleForm}
              type="text"
              name=""
              id="phone"
              placeholder="please write your phone number"
              required
              value={form.phone}
            />
          </div>
          <div className="inp">
            <i className="fa-solid fa-envelope"></i>
            <input
              onInput={handleForm}
              type="email"
              name=""
              id="email"
              placeholder="please write your email"
              required
              value={form.email}
            />
          </div>
          <textarea
            onInput={handleForm}
            name=""
            id="message"
            rows={5}
            placeholder="please write your message"
            value={form.message}
          ></textarea>
          <button className="btn2">submit</button>
          <p className="form-p">
            Do you want to become one of us?
            <Link to={"/join_us"}> join us </Link>
          </p>
        </form>
      </main>
    </>
  );
};

export default Contact;
