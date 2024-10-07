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
            <h2> Lorem ipsum dolor sit amet. </h2>
          </div>
          <div className="grid-3">
            <ServicesComp>
              <ServicesComp.Icon>
                <i className="fa-solid fa-fire"></i>
              </ServicesComp.Icon>
              <ServicesComp.H1>Lorem ipsum dolor sit amet.</ServicesComp.H1>
              <ServicesComp.P>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                inventore odit, accusamus pariatur similique deserunt voluptate
                quasi quibusdam
              </ServicesComp.P>
              <ServicesComp.Details more={true} />
            </ServicesComp>
            <ServicesComp>
              <ServicesComp.Icon>
                <i className="fa-solid fa-fire"></i>
              </ServicesComp.Icon>
              <ServicesComp.H1>Lorem ipsum dolor sit amet.</ServicesComp.H1>
              <ServicesComp.P>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                inventore odit, accusamus pariatur similique deserunt voluptate
                quasi quibusdam
              </ServicesComp.P>
              <ServicesComp.Details more={true} />
            </ServicesComp>
            <ServicesComp>
              <ServicesComp.Icon>
                <i className="fa-solid fa-fire"></i>
              </ServicesComp.Icon>
              <ServicesComp.H1>Lorem ipsum dolor sit amet.</ServicesComp.H1>
              <ServicesComp.P>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                inventore odit, accusamus pariatur similique deserunt voluptate
                quasi quibusdam
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
              <h2> Lorem ipsum dolor sit amet. </h2>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              adipisci quia tempore
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
              <Link to={"/join_us"} className="btn2 d-block">
                join us <i className="fa-solid fa-right-long"></i>
              </Link>
            </div>
            <div className="image">
              <img src={require("./3.jpg")} alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
