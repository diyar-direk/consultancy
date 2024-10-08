import React, { useContext } from "react";
import "./about.css";
import { Context } from "../../context/Context";
const AboutUs = () => {
  const context = useContext(Context);
  const language = context.language && context.language;
  return (
    <>
      <main className="center landing-img section-color">
        <div className="container">
          <div className="about-us grid-2">
            <div className="text flex-direction center">
              <h1>{language.about && language.about.landing_h1}</h1>
              <p>
              {language.about && language.about.landing_before_span} <span> {language.about && language.about.landing_span}  </span>
              {language.about && language.about.landing_p}
              </p>
            </div>
            <div className="image">
              <img
                loading="lazy"
                src={require("./Contact-Us-Vector-Illustration-Part-02-1-removebg-preview.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </main>
      <main className="center relative sub-page body-color">
        <div className="spikes"></div>

        <div className="container">
          <div className="about-us grid-2">
            <div className="image">
              <img loading="lazy" src={require("./7000961.jpg")} alt="" />
            </div>
            <div className="about-sections  flex-direction center">
              <div className="about-section flex">
                <img
                  loading="lazy"
                  src={require("./icons8-goal-48.png")}
                  alt=""
                />

                <div className="text">
                  <h3>  {language.about && language.about.our_mission}</h3>
                  <p>
                  {language.about && language.about.our_mission_p}
                  </p>
                </div>
              </div>
              <div className="about-section flex">
                <img
                  loading="lazy"
                  src={require("./icons8-surprise-50 (1).png")}
                  alt=""
                />

                <div className="text">
                  <h3> {language.about && language.about.our_vision}</h3>
                  <p>
                  {language.about && language.about.our_vision_p}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main className="center relative sub-page section-color">
        <div className="dots dots-down"></div>
        <div className="dots dots-up"></div>
        <div className="container margin-top ">
          <div className="about-sections">
            <div className="about-section flex">
              <img
                loading="lazy"
                src={require("./icons8-why-100.png")}
                alt=""
              />

              <div className="text">
                <h3>{language.about && language.about.why_nesco}</h3>
                <p>
                {language.about && language.about.why_nesco_p}
                </p>
              </div>
            </div>
          </div>
          <div className="about-us ">
            <div className="about-sections">
              <div className="about-section flex ">
                <img
                  loading="lazy"
                  src={require("./icons8-direction-50.png")}
                  alt=""
                />

                <div className="text">
                  <h3>   {language.about && language.about.our_approach}</h3>
                  <p>
                  {language.about && language.about.our_approach_p}
                  </p>
                </div>
              </div>
            </div>
            <div className="about-sections">
              <div className="about-section flex ">
                <img
                  loading="lazy"
                  src={require("./icons8-team-48.png")}
                  alt=""
                />

                <div className="text">
                  <h3>{language.about && language.about.meet_our_team}</h3>
                  <p>
                  {language.about && language.about.meet_our_team_p}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutUs;
