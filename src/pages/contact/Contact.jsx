import React, { useContext, useState } from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import FormLoading from "./FormLoading";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const Contact = () => {
  const context = useContext(Context);
  const language = context.language && context.language;
  const [capVal, setCapVal] = useState(null);
  const [errorData, setErrorData] = useState(false);
  function overlay() {
    setErrorData(true);
    window.onclick = () => {
      setErrorData(false);
    };
    setTimeout(() => {
      setErrorData(false);
    }, 3000);
  }
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  function handleForm(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send form data to your backend endpoint
      const response = await axios.post(
        "https://nesconsultancy.org/backend/sendemail.php",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      ); // Adjust this API URL
      if (response.status === 200) {
        window.location.reload(); // Reload page after successful submission
      }
    } catch (error) {
      console.error("Error submitting form", error);
      overlay(); // Show error overlay
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <>
      <main className="relative contact-landing wrap landing-img flex">
        {errorData && (
          <div className="error-send flex">
            <h1>{language.contact && language.contact.error}</h1>
            <img src={require("./error.png")} alt="" />
          </div>
        )}

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
                ceo@nesconsultancy.org
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
        <form
          onSubmit={handleSubmit}
          className="relative center flex-direction gap-20 section-color "
        >
          {loading && <FormLoading />}
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
          <div className="captcha">
            <ReCAPTCHA
              sitekey="6LfTO1wqAAAAAAb6iFWdcF2G84_nuCWLpFg2aDZY"
              onChange={(val) => setCapVal(val)}
            />
          </div>
          <textarea
            onInput={handleForm}
            name=""
            id="message"
            rows={5}
            required
            placeholder={
              language.contact && language.contact.please_enter_message
            }
            value={form.message}
          ></textarea>
          <button disabled={!capVal} className="btn2">
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
