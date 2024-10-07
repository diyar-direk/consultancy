import React from "react";
import "./about.css";
const AboutUs = () => {
  return (
    <>
      <main className="center landing-img section-color">
        <div className="container">
          <div className="about-us grid-2">
            <div className="text flex-direction center">
              <h1>About Us</h1>
              <p>
                At <span>NESCO </span>
                we are committed to delivering accurate, reliable, and impactful
                monitoring, evaluation, and capacity-building services to
                organisations operating in Northeast Syria. Founded with the
                mission of supporting humanitarian, development, and private
                sector actors, our goal is to provide evidence-based insights
                that guide effective decision-making and promote sustainable
                outcomes.
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
                  <h3>Our Mission</h3>
                  <p>
                    NESCO’s mission is to offer high-quality third-party
                    monitoring, evaluations, and technical consultations,
                    specifically tailored to the complex challenges of Northeast
                    Syria. By combining local knowledge with global best
                    practices, we ensure our clients receive accurate,
                    context-specific information to drive their programs
                    forward.
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
                  <h3>Our Vision</h3>
                  <p>
                    We envision a future where organisations working in
                    conflict-affected regions have access to trustworthy local
                    expertise and culturally informed perspectives, empowering
                    them to make data-driven decisions that improve lives and
                    communities.
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
                <h3>Why NESCO?</h3>
                <p>
                  Inspired by the resilience and historical significance of the
                  ancient city of Orkesh, NESCO stands as a modern-day symbol of
                  reliability and precision in the field of monitoring and
                  evaluation. Just as Orkesh was a cornerstone of ancient
                  civilization, NESCO is a trusted partner for organisations
                  seeking comprehensive and dependable data and insights in the
                  region. Our deep understanding of the local context and
                  unwavering commitment to accuracy make us the ideal choice for
                  organisations needing honest, actionable information.
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
                  <h3>Our Approach</h3>
                  <p>
                    We believe in a client-focused, collaborative approach,
                    placing the needs of our partners at the centre of our work.
                    Our team specialises in conducting independent assessments,
                    needs analyses, and capacity-building workshops, employing
                    cutting-edge methodologies to ensure the highest standards
                    of quality. Objectivity, reliability, and deep local
                    expertise define our approach, and our clients trust us to
                    provide solutions that make a difference.
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
                  <h3>Meet Our Team</h3>
                  <p>
                    NESCO brings together a team of highly experienced
                    professionals with expertise in monitoring and evaluation,
                    data analysis, and capacity-building across multiple
                    sectors. With a deep understanding of both local and
                    international contexts, we pride ourselves on delivering
                    globally informed, regionally relevant results that help our
                    clients achieve their objectives.
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
