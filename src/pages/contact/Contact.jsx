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
  //nescoprovider@gmail.com
  //ceo@nesconsultancy.org  
  return (
    <>
      <main className=" contact-landing wrap landing-img flex">
        <div className="image center flex-direction ">
          <div className="overlay"></div>

          <h1> {language.contact && language.contact.left_header}</h1>
          <p>{language.contact && language.contact.left_p}</p>
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
            <h2>{language.contact && language.contact.contact_h1}</h2>
            <p>{language.contact && language.contact.contact_p}</p>
          </div>
          <div className="inp ">
            <i className="fa-solid fa-user"></i>
            <input
              onInput={handleForm}
              type="text"
              name=""
              id="name"
              placeholder={
                language.contact && language.contact.please_enter_name
              }
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
              placeholder={
                language.contact && language.contact.please_enter_phone
              }
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
              placeholder={
                language.contact && language.contact.please_enter_email
              }
              required
              value={form.email}
            />
          </div>
          <textarea
            onInput={handleForm}
            name=""
            id="message"
            rows={5}
            placeholder={
              language.contact && language.contact.please_enter_message
            }
            value={form.message}
          ></textarea>
          <button className="btn2">
            {language.contact && language.contact.button_submit}
          </button>
          <p className="form-p">
            {language.contact && language.contact.become_one_of_us}
            <Link to={"/join_us"}>
              {language.contact && language.contact.join_us}
            </Link>
          </p>
        </form>
      </main>
    </>
  );
};

export default Contact;
