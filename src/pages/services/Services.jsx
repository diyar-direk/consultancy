import React, { useContext, useEffect } from "react";
import "./services.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const Services = () => {
  const context = useContext(Context);
  const language = context.language && context.language;

  useEffect(() => {
    const serviceElements = document.querySelectorAll(
      ".services-page .info > div"
    );
    const linkElements = document.querySelectorAll(
      ".services-page aside a:not(.contact)"
    );

    const handleScroll = () => {
      if (serviceElements.length > 0 && linkElements.length > 0) {
        for (let i = 0; i < serviceElements.length; i++) {
          const sectionTop = serviceElements[i].offsetTop;

          const nextSectionTop =
            serviceElements[i + 1]?.offsetTop || document.body.scrollHeight;

          if (
            window.scrollY >= sectionTop - 100 &&
            window.scrollY < nextSectionTop
          ) {
            linkElements.forEach((link) => link.classList.remove("active"));
            linkElements[i].classList.add("active");
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main className="center services-landing landing-img">
        <div className="container">
          <h1>{language.services && language.services.landing_h1}</h1>
          <p>{language.services && language.services.landing_p}</p>
        </div>
      </main>

      <main className="center section-color sub-page services-page">
        <div className="container">
          <div className="flex wrap align-start">
            <div className="info">
              {/* محتوى الأقسام */}
              <div id="our_services">
                <h1> {language.services && language.services.our_services}</h1>
                <p>{language.services && language.services.our_services_p}</p>
              </div>
              <div id="third">
                <h1>
                  {language.services &&
                    language.services.third_party_monitoring}
                </h1>
                <p>
                  {language.services &&
                    language.services.third_party_monitoring_p}
                </p>
              </div>
              <div id="Evaluations">
                <h1> {language.services && language.services.evaluations}</h1>
                <img
                  loading="lazy"
                  src={require("./pexels-rdne-9034783.jpg")}
                  alt=""
                />
                <p>{language.services && language.services.evaluations_p}</p>
              </div>
              <div id="Needs">
                <h1>
                  {language.services && language.services.needs_assessments}
                </h1>
                <p>
                  {language.services && language.services.needs_assessments_p}
                </p>
              </div>
              <div id="Capacity">
                <h1>
                  {language.services && language.services.capacity_training}
                </h1>
                <img
                  loading="lazy"
                  src={require("./IMG-20241007-WA0007.jpg")}
                  alt=""
                />
                <p>
                  {language.services && language.services.capacity_training_p}
                </p>
              </div>
              <div id="Awareness">
                <h1>
                  {language.services && language.services.awarness_campaigns}
                </h1>
                <p>
                  {language.services && language.services.awarness_campaigns_p}
                </p>
              </div>
              <div id="Technical">
                <h1>
                  {language.services && language.services.technical_consulting}
                </h1>
                <img
                  loading="lazy"
                  src={require("./pexels-jep-gambardella-7689757.jpg")}
                  alt=""
                />
                <p>
                  {language.services &&
                    language.services.technical_consulting_p}
                </p>
              </div>
            </div>

            <aside>
              <a className="active" href="#our_services">
                {language.services && language.services.our_services}
              </a>
              <a href="#third">
                {language.services && language.services.third_party_monitoring}
              </a>
              <a href="#Evaluations">
                {language.services && language.services.evaluations}
              </a>
              <a href="#Needs">
                {language.services && language.services.needs_assessments}
              </a>
              <a href="#Capacity">
                {language.services && language.services.capacity_training}
              </a>
              <a href="#Awareness">
                {language.services && language.services.awarness_campaigns}
              </a>
              <a href="#Technical">
                {language.services && language.services.technical_consulting}
              </a>
              <Link to={`/contact_us`} className="contact">
                {language.services && language.services.button_contact_us}
              </Link>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;
