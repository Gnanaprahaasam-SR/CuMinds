import React, { useState, useEffect } from 'react';
// import 'animate.css';
import asksolve from '../images/askSolution.jpg';
import explore from '../images/new-vision.jpg';
import learn from '../images/student-sitting.jpg';
import learning from '../images/library.jpg';
import service from '../images/service.jpg';
import knowledge from '../images/education.jpg';

const AboutUs = () => {
  const [cardsAnimation, setCardsAnimation] = useState([]);

  useEffect(() => {
    const animations = [
      'animate__fadeInLeft',
      'animate__fadeInRight',
      'animate__fadeInUp',
      'animate__fadeInDown',
      'animate__fadeInLeft',
      'animate__fadeInRight',
    ];

    const shuffledAnimations = shuffleArray(animations);
    setCardsAnimation(shuffledAnimations);
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const OfferingCard = ({ title, description, animateClass, imageSrc }) => {
    return (
      <div
        className={`offering-card animate__animated ${animateClass}`}
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px',
          height: '100%',
        }}
      >
        <img src={imageSrc} alt={title} style={{ width: '100%', borderRadius: '8px 8px 0 0', marginBottom: '15px' }} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };

  return (
    <div className="about-us-container aboutUs " style={{ overflowX: 'hidden' }}>

      {/* Header Section */}
      <div className="aboutUs-heroSection py-5">
        <div className="header-section container">
          <p className="animate__animated animate__fadeInDown title text-white">ABOUT US</p>
          <div className="animate__animated animate__fadeInDown animate__delay-1s sub-title text-white">CuMinds Innovations</div>
          <div className="animate__animated animate__fadeInDown animate__delay-2s sub-title text-white">Think Simple, Do Big!</div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="" style={{ backgroundColor: "var(--background-color)" }}>
        <div className="container py-5 ">
          <h1 className="animate__animated animate__fadeInUp text-center fw-bold" style={{ color: "var(--primary-lite-color)" }}>Mission & Vision</h1>
          <p className="animate__animated animate__fadeInUp animate__delay-1s font-color">
            Discovering the knowledge you need can be challenging in a world of data & information. At CuMinds, a knowledge-as-a-solution provider (KaaS), aims to provide simple, effective, and creative solutions for real-world business challenges that help individuals and healthcare/pharma companies.
          </p>
        </div>
      </div>

      {/* CuMinds Offerings Section */}
      <div className="offerings-section px-5">
        <div className="row justify-content-center">
          <h2 className="text-center animate__animated animate__fadeInUp font-color py-2  pt-3 fw-bold">CuMinds Offerings</h2>
        </div>
        <div className="row justify-content-center g-3">
          <div className="col-md-4 font-color">
            <OfferingCard
              title="Learn & Grow"
              description="Digital learning platform that gives you access to various topics."
              imageSrc={learn}
              animateClass={cardsAnimation[0]}
            />
          </div>
          <div className="col-md-4 font-color">
            <OfferingCard
              title="Explore"
              description="Consulting that lets you seek advice, information, or guidance from knowledgeable professionals."
              imageSrc={explore}
              animateClass={cardsAnimation[1]}

            />
          </div>
          <div className="col-md-4 font-color">
            <OfferingCard
              title="Ask & Solve"
              description="Knowledge-based application suite designed to solve healthcare business problems."
              imageSrc={asksolve}
              animateClass={cardsAnimation[2]}
            />
          </div>
        </div>
      </div>

      {/* CuMinds Benefits Section */}
      <div className="benefits-section mt-5">
        <div className="row justify-content-center">
          <h2 className="text-center animate__animated animate__fadeInUp font-color fw-bold pb-2 ">CuMinds Benefits</h2>
        </div>
        <div className="row justify-content-center px-5 mb-5">
          <div className="col-md-4 font-color">
            <OfferingCard
              title="Learning"
              description="The digital learning platform allows users to gain extensive knowledge across various topics, enhancing professionals' and companies' expertise and career and business acumen."
              imageSrc={learning}
              animateClass={cardsAnimation[3]}
            />
          </div>
          <div className="col-md-4 font-color">
            <OfferingCard
              title="Services"
              description="Consulting services provide expert advice and information to help businesses make data-driven decisions."
              imageSrc={service}
              animateClass={cardsAnimation[4]}
            />
          </div>
          <div className="col-md-4 font-color">
            <OfferingCard
              title="Knowledge Hub"
              description="The knowledge-based application suite is designed to address and solve practical business problems, especially in the healthcare sector."
              imageSrc={knowledge}
              animateClass={cardsAnimation[5]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
