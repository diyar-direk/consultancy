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
            <Link className="btn">see our services</Link>
            <Link className="btn2">
              get started <i className="fa-solid fa-arrow-up-long"></i>
            </Link>
          </div>
        </div>
      </main>
      <main className="home-services center">
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
              <ServicesComp.P more={true}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                inventore odit, accusamus pariatur similique deserunt voluptate
                quasi quibusdam excepturi unde quaerat minus commodi corrupti
                asperiores non ex iusto ea neque.
              </ServicesComp.P>
            </ServicesComp>
            <ServicesComp>
              <ServicesComp.Icon>
                <i className="fa-solid fa-fire"></i>
              </ServicesComp.Icon>
              <ServicesComp.H1>Lorem ipsum dolor sit amet.</ServicesComp.H1>
              <ServicesComp.P more={true}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                inventore odit, accusamus pariatur similique deserunt voluptate
                quasi quibusdam excepturi unde quaerat minus commodi corrupti
                asperiores non ex iusto ea neque.
              </ServicesComp.P>
            </ServicesComp>
            <ServicesComp>
              <ServicesComp.Icon>
                <i className="fa-solid fa-fire"></i>
              </ServicesComp.Icon>
              <ServicesComp.H1>Lorem ipsum dolor sit amet.</ServicesComp.H1>
              <ServicesComp.P more={true}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                inventore odit, accusamus pariatur similique deserunt voluptate
                quasi quibusdam excepturi unde quaerat minus commodi corrupti
                asperiores non ex iusto ea neque.
              </ServicesComp.P>
            </ServicesComp>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
