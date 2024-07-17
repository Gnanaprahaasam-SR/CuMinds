
import React, { useState, useEffect, useRef } from 'react';
import AskAndSolveImage from '../assets/AskAndSolve.jpg';
import LearnAndGrowImage from '../assets/LearnAndGrow.jpg';
import ExploreAndGainImage from '../assets/ExploreAndGain.jpg';
import KnowledgeHubImage from '../assets/KnowledgeHub.jpg';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

const CarouselSlider = () => {
  const initialItems = [
    { id: 1, image: LearnAndGrowImage, title: 'Learn & Grow', type: 'Solution', description: 'Master the ever-evolving landscape of clinical research, healthcare, data science, and AI with L&G. Our platform offers concise, topic-specific video/visual presentations designed for efficient learning.' },
    { id: 2, image: ExploreAndGainImage, title: 'Explore & Gain', type: 'Solution', description: 'We offer building comprehensive suite of knowledge-based applications specifically designed for the healthcare and clinical trial landscape. Tackle complex challenges and explore the frontiers of knowledge with tools tailored for researchers and scientists.' },
    { id: 3, image: AskAndSolveImage, title: 'Ask & Solve', type: 'Solution', description: 'Seek personalized advice, information, and guidance on various clinical trial and healthcare areas. Address specific challenges by tapping into the invaluable knowledge and experience of our network.' },
    { id: 4, image: KnowledgeHubImage, title: 'Knowledge Hub', type: 'Solution', description: 'We offer a powerful combination of a knowledge hub and a dynamic blog, designed to quench your thirst for knowledge and keep you at the forefront of the latest trends.' }
  ];

  const [sliderItems, setSliderItems] = useState(initialItems);
  const sliderRef = useRef(null);

  const moveSlider = (direction) => {
    let newItems = [...sliderItems];
    if (direction === 'next') {
      const firstItem = newItems.shift();
      newItems.push(firstItem);
      sliderRef.current.classList.add('next');
    } else {
      const lastItem = newItems.pop();
      newItems.unshift(lastItem);
      sliderRef.current.classList.add('prev');
    }
    setSliderItems(newItems);
  };

  useEffect(() => {
    const handleAnimationEnd = () => {
      sliderRef.current.classList.remove('next', 'prev');
    };

    const sliderElement = sliderRef.current;
    sliderElement.addEventListener('animationend', handleAnimationEnd);

    return () => {
      sliderElement.removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

  return (
    <div className="global-background">
      <div className="slider" ref={sliderRef}>
        <div className="list">
          {sliderItems.map((item, index) => (
            <div key={item.id} className={`item ${index === 0 ? 'active' : ''}`}>
              <img src={item.image} alt={item.title} />
              <div className="content">
                <div className="title">{item.title}</div>
                <div className="type">{item.type}</div>
                <div className="description">{item.description}</div>
                <div className="buttons mt-3">
                  <button className='button-primary'>See More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='thumbnail'>
          {sliderItems.map((item, index) => (
            <div key={item.id} className={`item ${index === 1 ? 'active' : ''}`}>
              <img src={sliderItems[(index + 1) % sliderItems.length].image} alt={sliderItems[(index + 1) % sliderItems.length].title} />
            </div>
          ))}
        </div>
        <div className='nextPrevArrows'>
          <button className='prev' onClick={() => moveSlider('prev')}><ArrowLeft /></button>
          <button className='next' onClick={() => moveSlider('next')}><ArrowRight /></button>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlider;
