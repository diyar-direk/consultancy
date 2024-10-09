import React, { useContext, useState } from "react";
import "./contact.css";
import { Context } from "../../context/Context";
import FormLoading from "./FormLoading";
import ReCAPTCHA from "react-google-recaptcha";

const JoinUs = () => {
  const context = useContext(Context);
  const language = context.language && context.language;
  const [capVal, setCapVal] = useState(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  function handleForm(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }
  const [file, setFile] = useState(false);
  const [fileErr, setFileErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setFileErr(true);
    } else {
      try {
        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("phone", form.phone);
        formData.append("email", form.email);
        formData.append("message", form.message);
        formData.append("file", file);
        window.location.reload();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <>
      <main className="contact-landing join wrap landing-img flex">
        <div className="image center flex-direction ">
          <div className="overlay"></div>

          <h1>{language.join_us && language.join_us.left_header}</h1>
          <p>{language.join_us && language.join_us.left_p}</p>
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
        <form
          onSubmit={handleSubmit}
          className="center flex-direction gap-20 section-color"
        >
          {loading && <FormLoading />}
          <div>
            <h2> {language.join_us && language.join_us.join_us_h1}</h2>
            <p>{language.join_us && language.join_us.join_us_p}</p>
          </div>
          <div className="inp ">
            <i className="fa-solid fa-user"></i>
            <input
              onInput={handleForm}
              type="text"
              name=""
              id="name"
              placeholder={
                language.join_us && language.join_us.please_enter_name
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
                language.join_us && language.join_us.please_enter_phone
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
                language.join_us && language.join_us.please_enter_email
              }
              required
              value={form.email}
            />
          </div>

          <label htmlFor="file" className="inp">
            <input
              type="file"
              id="file"
              accept=".pdf,.doc,.docx"
              onInput={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const isValid = [
                    "application/pdf",
                    "application/msword",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                  ].includes(file.type);
                  if (isValid) {
                    setFile(file);
                    setFileErr(false);
                  } else {
                    setFileErr(true);
                  }
                }
              }}
            />
            <i className="fa-solid fa-file"></i>
            {language.join_us && language.join_us.click_here_to_upload_cv}
          </label>
          {fileErr && (
            <p className="error-text">
              {language.join_us && language.join_us.file_error}
            </p>
          )}
          {file && (
            <p>
              {language.join_us && language.join_us.uploaded_file} {file.name}
            </p>
          )}
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
            placeholder={
              language.join_us && language.join_us.please_enter_message
            }
            value={form.message}
          ></textarea>
          <button className="btn2">
            {language.join_us && language.join_us.button_submit}
          </button>
        </form>
      </main>
    </>
  );
};

export default JoinUs;
