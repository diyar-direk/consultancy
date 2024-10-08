import React, { useContext } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import ServicesComp from "../services/ServicesComp";
import { Context } from "../../context/Context";
const Home = () => {
  const context = useContext(Context);
  const language = context.language && context.language;
  return (
    <>
      <main className="home-landing center relative landing-img ">
        <img loading="lazy" src={require("./right-shade.png")} alt="" />
        <img
          loading="lazy"
          className="left"
          src={require("./left-shade.png")}
          alt=""
        />
        <div className="container center flex-direction ">
          <h1>{language.landing && language.landing.landing_h1}</h1>
          <h3>{language.landing && language.landing.landing_p}</h3>
          <div className="flex">
            <Link to="/our_services" className="btn">
              {language.landing && language.landing.button_see_our_services}
            </Link>
            <Link className="btn2" to="/contact_us">
              {language.landing && language.landing.button_get_started}
              <i className="fa-solid fa-arrow-up-long"></i>
            </Link>
          </div>
        </div>
        <div className="overlay"></div>
      </main>
      <main className="home-services section-color center sub-page">
        <div className="container">
          <div className="center title flex-direction">
            <h1 className="title">
              {language.home_services &&
                language.home_services.home_services_header}
            </h1>
            <h2>
              {language.home_services && language.home_services.home_services_p}
            </h2>
          </div>
          <div className="grid-3 align-start">
            <ServicesComp>
              <ServicesComp.Icon>
                <img
                  loading="lazy"
                  src={require("./icons8-monitoring-50.png")}
                  alt=""
                />
              </ServicesComp.Icon>
              <ServicesComp.H1>
                {" "}
                {language.home_services && language.home_services.tpm_header}
              </ServicesComp.H1>
              <ServicesComp.P>
                {language.home_services && language.home_services.tpm_p}
              </ServicesComp.P>
              <ServicesComp.Details
                language={language.home_services && language.home_services}
              />
            </ServicesComp>
            <ServicesComp>
              <ServicesComp.Icon>
                <img
                  loading="lazy"
                  src={require("./icons8-training-48.png")}
                  alt=""
                />
              </ServicesComp.Icon>
              <ServicesComp.H1>
                {language.home_services &&
                  language.home_services.training_header}
              </ServicesComp.H1>
              <ServicesComp.P>
                {language.home_services && language.home_services.training_p}
              </ServicesComp.P>
              <ServicesComp.Details
                language={language.home_services && language.home_services}
              />
            </ServicesComp>
            <ServicesComp>
              <ServicesComp.Icon>
                <img
                  loading="lazy"
                  src={require("./icons8-chart-50.png")}
                  alt=""
                />
              </ServicesComp.Icon>
              <ServicesComp.H1>
                {language.home_services &&
                  language.home_services.evaluations_header}
              </ServicesComp.H1>
              <ServicesComp.P>
                {language.home_services && language.home_services.evaluations_p}
              </ServicesComp.P>
              <ServicesComp.Details
                language={language.home_services && language.home_services}
              />
            </ServicesComp>
          </div>
          <Link className="btn2">
            {language.home_services &&
              language.home_services.button_explore_our_services}
          </Link>
        </div>
      </main>
      <main className="about-home">
        <div className="flex">
          <div className="image"></div>
          <article className="center flex-direction">
            <div className="center title flex-direction">
              <h1 className="title">
                {language.home_about && language.home_about.home_about_header}
              </h1>
              <h2>
                {language.home_about && language.home_about.home_about_header_p}
              </h2>
            </div>
            <p>{language.home_about && language.home_about.home_services_p}</p>
            <div className="flex gap-20">
              <Link className="btn2">
                {language.home_about && language.home_about.button_read_more}
              </Link>
              <Link className="btn">
                {language.home_about && language.home_about.button_contact_us}
              </Link>
            </div>
          </article>
        </div>
      </main>
      <main className="sub-page center flex-direction home-team section-color">
        <div className="center title flex-direction">
          <h1 className="title">
            {language.home_our_team &&
              language.home_our_team.home_our_team_header}
          </h1>
          <h2>
            {language.home_our_team &&
              language.home_our_team.home_our_team_header_p}
          </h2>
        </div>
        <div className="container">
          <div className="grid-2">
            <div className="info">
              <h2>
                {language.home_our_team &&
                  language.home_our_team.home_our_team_h1}
              </h2>
              <p>
                {language.home_our_team &&
                  language.home_our_team.home_our_team_p}
              </p>
              <h3>
                {language.home_our_team &&
                  language.home_our_team.become_one_of_us}
              </h3>
              <Link to={"/join_us"} className="btn2 d-block en-arrow">
                {language.home_our_team &&
                  language.home_our_team.button_join_us}
                <i className="fa-solid fa-right-long"></i>
              </Link>
            </div>
            <div className="image">
              <img loading="lazy" src={require("./3.jpg")} alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
