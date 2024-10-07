import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import ServicesComp from "../services/ServicesComp";
const Home = () => {
  return (
    <>
      <main className="home-landing center relative ">
        <img src={require("./right-shade.png")} alt="" />
        <img className="left" src={require("./left-shade.png")} alt="" />
        <div className="container center flex-direction ">
          <h1>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            rem optio placeat Consectetur, iusto.
          </h3>
          <div className="flex">
            <Link to="/our_services" className="btn">
              see our services
            </Link>
            <Link className="btn2" to="/contact_us">
              get started <i className="fa-solid fa-arrow-up-long"></i>
            </Link>
          </div>
        </div>
        <div className="overlay"></div>
      </main>
      <main className="home-services section-color center sub-page">
        <div className="container">
          <div className="center title flex-direction">
            <h1 className="title">our services</h1>
            <h2> We provide innovative solutions for success. </h2>
          </div>
          <div className="grid-3 align-start">
            <ServicesComp>
              <ServicesComp.Icon>
                <img src={require("./icons8-monitoring-50.png")} alt="" />
              </ServicesComp.Icon>
              <ServicesComp.H1>Third-Party Monitoring (TPM).</ServicesComp.H1>
              <ServicesComp.P>
                Our TPM services offer independent, objective assessments of
                projects and programs across various sectors.
              </ServicesComp.P>
              <ServicesComp.Details more={true} />
            </ServicesComp>
            <ServicesComp>
              <ServicesComp.Icon>
                <img src={require("./icons8-training-48.png")} alt="" />
              </ServicesComp.Icon>
              <ServicesComp.H1>Capacity Building & Training.</ServicesComp.H1>
              <ServicesComp.P>
                We offer capacity-building programs tailored to the needs of
                local NGOs, INGOs, and private organisations.
              </ServicesComp.P>
              <ServicesComp.Details more={true} />
            </ServicesComp>
            <ServicesComp>
              <ServicesComp.Icon>
                <img src={require("./icons8-chart-50.png")} alt="" />
              </ServicesComp.Icon>
              <ServicesComp.H1>
                Evaluations (External & Internal).
              </ServicesComp.H1>
              <ServicesComp.P>
                We conduct both external and internal evaluations of projects
                and programs to assess their relevance, efficiency,
                effectiveness, sustainability, and impact.
              </ServicesComp.P>
              <ServicesComp.Details more={true} />
            </ServicesComp>
          </div>
          <Link className="btn2"> explorer our services </Link>
        </div>
      </main>
      <main className="about-home">
        <div className="flex">
          <div className="image"></div>
          <article className="center flex-direction">
            <div className="center title flex-direction">
              <h1 className="title">About Us</h1>
              <h2> our goal is to exceed your expectations. </h2>
            </div>
            <p>
              At NESCO, we are committed to delivering accurate, reliable, and
              impactful monitoring, evaluation, and capacity-building services
              to organisations operating in Northeast Syria. Founded with the
              mission of supporting humanitarian, development, and private
              sector actors, our goal is to provide evidence-based insights that
              guide effective decision-making and promote sustainable outcomes.
            </p>
            <div className="flex gap-20">
              <Link className="btn2"> read more </Link>
              <Link className="btn"> contact us </Link>
            </div>
          </article>
        </div>
      </main>
      <main className="sub-page center flex-direction home-contact section-color">
        <div className="center title flex-direction">
          <h1 className="title">contact us</h1>
          <h2> Lorem ipsum dolor sit amet. </h2>
        </div>
        <div className="container">
          <div className="grid-2 align-start">
            <div className="info">
              <div>
                <div className="center gap-20">
                  <i className="fa-solid fa-map-location-dot"></i>
                  <div className="flex-1">
                    <h2> our location</h2>
                    <a href="" target="_blank">
                      syria alhasaka
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="center gap-20">
                  <i className="fa-solid fa-envelope"></i>
                  <div className="flex-1">
                    <h2> our email</h2>
                    <a href="" target="_blank">
                      example@222.gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="center gap-20">
                  <i className="fa-solid fa-phone"></i>
                  <div className="flex-1">
                    <h2> our phone</h2>
                    <a href="" target="_blank">
                      +963 938 094
                    </a>
                  </div>
                </div>
              </div>
              <div className="center gap-20">
                <i className="fa-brands fa-facebook"></i>
                <div className="flex-1">
                  <h2> facebooke</h2>
                  <a href="" target="_blank">
                    +963 938 094
                  </a>
                </div>
              </div>
            </div>
            <div className="map">
              <img src={require("./GoogleMapTA.webp")} alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
