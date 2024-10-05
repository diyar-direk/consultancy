import React from "react";
import "./setting.css";
const Setting = () => {
  const clickLang = (e) => {
    e.stopPropagation();
    document.querySelector(".lang-div").classList.toggle("active");
  };
  const clickSpan = (e) => {
    document.querySelector(".language > div span").textContent =
      e.target.dataset.lang;
    const allp = document.querySelectorAll(".language > article p");
    allp.forEach((e) => e.classList.remove("active"));
    e.target.classList.add("active");
    e.target.parentNode.classList.remove("active");
  };
  return (
    <div className="language">
      <div onClick={clickLang}>
        <span>en</span>
        <i className="fa-solid fa-caret-down"></i>
      </div>
      <article className="lang-div">
        <p onClick={clickSpan} className="active" data-lang="EN">
          EN
        </p>
        <p onClick={clickSpan} data-lang="AR">
          AR
        </p>
      </article>
    </div>
  );
};

export default Setting;
