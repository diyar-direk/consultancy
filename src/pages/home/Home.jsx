import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import ServicesComp from "../services/ServicesComp";
const Home = () => {
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
                <img
                  loading="lazy"
                  src={require("./icons8-monitoring-50.png")}
                  alt=""
                />
              </ServicesComp.Icon>
              <ServicesComp.H1>Third-Party Monitoring (TPM).</ServicesComp.H1>
              <ServicesComp.P>
                Our TPM services offer independent, objective assessments of
                projects and programs across various sectors.
              </ServicesComp.P>
              <ServicesComp.Details />
            </ServicesComp>
            <ServicesComp>
              <ServicesComp.Icon>
                <img
                  loading="lazy"
                  src={require("./icons8-training-48.png")}
                  alt=""
                />
              </ServicesComp.Icon>
              <ServicesComp.H1>Capacity Building & Training.</ServicesComp.H1>
              <ServicesComp.P>
                We offer capacity-building programs tailored to the needs of
                local NGOs, INGOs, and private organisations.
              </ServicesComp.P>
              <ServicesComp.Details />
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
                Evaluations (External & Internal).
              </ServicesComp.H1>
              <ServicesComp.P>
                We conduct both external and internal evaluations of projects
                and programs to assess their relevance, efficiency,
                effectiveness, sustainability, and impact.
              </ServicesComp.P>
              <ServicesComp.Details />
            </ServicesComp>
          </div>
          <Link className="btn2"> explorer our services </Link>
        </div>
      </main>
      <main className="about-home">
        <div className="flex wrap">
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
      <main className="sub-page center flex-direction home-team section-color">
        <div className="center title flex-direction">
          <h1 className="title"> Our Team</h1>
          <h2> Lorem ipsum dolor sit amet. </h2>
        </div>
        <div className="container">
          <div className="grid-2">
            <div className="info">
              <h2>Meet our team </h2>
              <p>
                NESCO brings together a team of highly experienced professionals
                with expertise in monitoring and evaluation, data analysis, and
                capacity-building across multiple sectors. With a deep
                understanding of both local and international contexts, we pride
                ourselves on delivering globally informed, regionally relevant
                results that help our clients achieve their objectives.
              </p>
              <h3>Do you want to become one of us?</h3>
              <Link to={"/join_us"} className="btn2 d-block en-arrow">
                join us <i className="fa-solid fa-right-long"></i>
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
