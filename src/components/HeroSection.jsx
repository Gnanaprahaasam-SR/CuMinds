import React, { useState, useEffect, useRef, useCallback } from 'react';
import dataScience from '../images/data-Science.jpg';
import riskBased from '../images/risk-based.jpg';
import flexibleEngagement from '../images/flexibleEngagement.jpg';
import deepExpertise from '../images/deepExpertise.jpg';
import heroSection from "../images/heroSection.jpg";
import { GoDotFill } from "react-icons/go";

const initialItems = [
    { id: 1, image: deepExpertise, title: 'Welcome to CuMinds Your trusted Knowledge- as- a-Solution (KaaS) Partner', type: 'Solution', description: 'Seek personalized advice, information, and guidance on various clinical trial and healthcare areas. Address specific challenges by tapping into the invaluable knowledge and experience of our network.' },
    { id: 2, image: dataScience, title: 'Risk Based Data Science Enablers', type: 'Solution', description: 'Master the ever-evolving landscape of clinical research, healthcare, data science, and AI with L&G. Our platform offers concise, topic-specific video/visual presentations designed for efficient learning.' },
    { id: 3, image: riskBased, title: 'Benefits of Risk-Based Data Science with QbD', type: 'Solution', description: 'We offer building comprehensive suite of knowledge-based applications specifically designed for the healthcare and clinical trial landscape. Tackle complex challenges and explore the frontiers of knowledge with tools tailored for researchers and scientists.' },
    { id: 4, image: flexibleEngagement, title: 'Our flexible Engagement', type: 'Solution', description: 'We offer a powerful combination of a knowledge hub and a dynamic blog, designed to quench your thirst for knowledge and keep you at the forefront of the latest trends.' }
];

const CarouselSection = () => {
    const [sliderItems, setSliderItems] = useState(initialItems);
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const moveSlider = useCallback((index) => {
        let newIndex = index;
        if (sliderRef.current) {
            sliderRef.current.classList.add(newIndex > currentIndex ? 'next' : 'prev');
        }
        setCurrentIndex(newIndex);
    }, [currentIndex]);

    useEffect(() => {
        const handleAnimationEnd = () => {
            sliderRef.current.classList.remove('next', 'prev');
        };

        const sliderElement = sliderRef.current;
        sliderElement.addEventListener('animationend', handleAnimationEnd);

        const intervalId = setInterval(() => {
            moveSlider((currentIndex + 1) % sliderItems.length);
        }, 6000);

        return () => {
            sliderElement.removeEventListener('animationend', handleAnimationEnd);
            clearInterval(intervalId);
        };
    }, [moveSlider, currentIndex, sliderItems.length]);

    return (
        <div className="global-background">
            <div className="slider" ref={sliderRef}>
                <div className="list">

                    {sliderItems.map((item, index) => (
                        <div key={item.id} className={`item ${index === currentIndex ? 'active' : ''}`}>
                            {index === 0 ? (
                                <div >
                                    <img src={heroSection} alt={item.title} className="slider-image" />
                                    <div className="content">
                                        <div className="title ">Welcome to <span className='text-nowrap d-flex d-inline text-dark'><div style={{color:"#508C9B"}}>Cu</div> Minds</span> Your trusted Knowledge- as- a-Solution (KaaS) Partner</div>
                                    </div>
                                </div>
                            ) : <>
                                <img src={item.image} alt={item.title} className="slider-image" />
                                <div className="content">
                                    <div className="title">{item.title}</div>
                                    {/* <div className="type">{item.type}</div> */}
                                    {/* <div className="description">{item.description}</div> */}

                                    <div className="buttons mt-3">
                                        <button className="button-primary">See More</button>
                                    </div>
                                </div>
                            </>}
                        </div>
                    ))}
                </div>
                <div className="titles px-5">
                    {sliderItems.map((item, index) => (
                        index === 0 ? "" : (
                            <div key={item.id} className={`title-item d-none d-sm-block ${index === currentIndex ? 'active ' : ' '}`} onClick={() => moveSlider(index)}>
                                {item.title}
                            </div>)
                    ))}
                    {sliderItems.map((item, index) => (
                        <div key={item.id} >
                            <GoDotFill className={`dot-item d-block d-sm-none ${index === currentIndex ? 'active' : ''}`} onClick={() => moveSlider(index)} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarouselSection;
