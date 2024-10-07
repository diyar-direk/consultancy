import React from "react";
import "./services.css";
import { Link } from "react-router-dom";
window.addEventListener("scroll", (e) => {
    
});
const Services = () => {
  return (
    <>
      <main className="center services-landing landing-img">
        <div className="container">
          <h1>our services</h1>
          <p>
            we provide a wide range of tailored services designed to meet the
            needs of organisations working in Northeast Syria
          </p>
        </div>
      </main>
      <main className="center section-color sub-page services-page">
        <div className="container">
          <div className="flex wrap align-start">
            <div className="info">
              <div id="our_services">
                <h1>our services</h1>

                <p>
                  At NESCO, we provide a wide range of tailored services
                  designed to meet the needs of organisations working in
                  Northeast Syria. Our expertise in monitoring, evaluation,
                  capacity building, and consultations helps INGOs, local NGOs,
                  companies, and others operate more effectively in complex
                  environments. Each of our services is rooted in our commitment
                  to delivering accurate, reliable, and context-specific
                  solutions.
                </p>
              </div>
              <div id="third">
                <h1>Third-Party Monitoring (TPM)</h1>
                <p>
                  Our TPM services offer independent, objective assessments of
                  projects and programs across various sectors. We gather and
                  analyse data directly from the field, providing our clients
                  with credible, evidence-based information to measure progress,
                  ensure compliance, and enhance program outcomes. Whether you
                  need project verification or compliance monitoring, we deliver
                  trustworthy insights that enable effective decision-making.
                </p>
              </div>
              <div id="Evaluations">
                <h1>Evaluations (External & Internal)</h1>
                <img
                  loading="lazy"
                  src={require("./pexels-rdne-9034783.jpg")}
                  alt=""
                />
                <p>
                  We conduct both external and internal evaluations of projects
                  and programs to assess their relevance, efficiency,
                  effectiveness, sustainability, and impact. Our team uses a mix
                  of qualitative and quantitative methods to provide
                  comprehensive evaluation reports that help organisations
                  understand the successes and challenges of their initiatives.
                  Our evaluations provide actionable recommendations to enhance
                  future programming.
                </p>
              </div>
              <div id="Needs">
                <h1>Needs Assessments</h1>
                <p>
                  NESCO specialises in conducting needs assessments that enable
                  organisations to better understand the needs of the
                  communities they serve. Using rigorous data collection and
                  analysis techniques, we identify gaps and opportunities,
                  helping our clients design interventions that are both
                  relevant and impactful. Our assessments cover multiple
                  sectors, including food security, education, health, and
                  water, sanitation, and hygiene (WASH).
                </p>
              </div>
              <div id="Capacity">
                <h1>Capacity Building & Training</h1>
                <img src={require("./IMG-20241007-WA0007.jpg")} alt="" />
                <p>
                  We offer capacity-building programs tailored to the needs of
                  local NGOs, INGOs, and private organisations. Our workshops
                  and training programs focus on building skills in areas such
                  as project management, monitoring and evaluation, data
                  collection methods, and reporting. Whether it’s technical or
                  vocational training, NESCO equips individuals and teams with
                  the knowledge and tools they need to perform at their best.
                </p>
              </div>
              <div id="Awareness">
                <h1>Awareness Campaigns</h1>
                <p>
                  Our awareness campaign services help organisations communicate
                  effectively with their target audiences. From health education
                  to social behaviour change, we design and implement campaigns
                  that engage communities, raise awareness, and drive positive
                  behavioural changes. Our campaigns are grounded in a deep
                  understanding of local cultures and contexts, ensuring they
                  resonate with the intended audience.
                </p>
              </div>
              <div id="Technical">
                <h1>Technical and Administrative Consultations</h1>
                <img
                  src={require("./pexels-jep-gambardella-7689757.jpg")}
                  alt=""
                />
                <p>
                  NESCO provides expert consultation services to help
                  organisations navigate complex technical and administrative
                  challenges. Whether it’s developing new strategies, improving
                  operational efficiencies, or ensuring compliance with donor
                  requirements, our team is here to support your organisation
                  with hands-on guidance and tailored solutions
                </p>
              </div>
            </div>

            <aside>
              <a className="active" href="#our_services">
                our services
              </a>
              <a href="#third"> Third-Party Monitoring </a>
              <a href="#Evaluations"> Evaluations </a>
              <a href="#Needs"> Needs Assessments </a>
              <a href="#Capacity"> Capacity Building & Training </a>
              <a href="#Awareness"> Awareness Campaigns </a>
              <a href="#Technical">
                Technical and Administrative Consultations
              </a>
              <Link className="contact"> contact us </Link>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;
