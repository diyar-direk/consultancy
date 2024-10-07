import React, { useContext, useEffect } from "react";
import "./setting.css";
import { Context } from "../context/Context";
const Setting = (props) => {
  const context = useContext(Context);
  const language = context.language;

  const clickLang = (e) => {
    e.stopPropagation();
    document
      .querySelector(`.lang-div[data-position="${props.position}"]`)
      .classList.toggle("active");
  };
  const clickSpan = (e) => {
    document.querySelector(".language > div span").textContent =
      e.target.textContent;
    context.setLanguage(e.target.dataset.lang);
    window.localStorage.setItem("language", e.target.dataset.lang);
    e.target.parentNode.classList.remove("active");
  };
  useEffect(() => {
    const span = document.querySelectorAll(".language > div span");
    const allLanguages = document.querySelectorAll(".language  .lang-div p");
    allLanguages.forEach((e) => {
      e.classList.remove("active");
      if (e.dataset.lang === language) {
        e.classList.add("active");
        span.forEach((span) => (span.innerHTML = e.innerHTML));
      }
    });
  }, [language]);
  return (
    <div className="language">
      <div onClick={clickLang}>
        <span>en</span>
        <i className="fa-solid fa-caret-down"></i>
      </div>
      <article data-position={props.position} className="lang-div">
        <p onClick={clickSpan} className="active" data-lang="english">
          EN
        </p>
        <p onClick={clickSpan} data-lang="arabic">
          AR
        </p>
        <p onClick={clickSpan} data-lang="kurdish">
          KU
        </p>
      </article>
    </div>
  );
};

export default Setting;
