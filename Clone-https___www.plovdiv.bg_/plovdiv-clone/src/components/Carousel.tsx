import React, { useState, useEffect, CSSProperties } from 'react';

interface CarouselItem {
  id: number;
  imageUrl: string;
  link: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    imageUrl: 'https://ext.same-assets.com/2523606736/2074486766.jpeg',
    link: '/program-1'
  },
  {
    id: 2,
    imageUrl: 'https://ext.same-assets.com/2523606736/1601323477.jpeg',
    link: '/program-2'
  },
  {
    id: 3,
    imageUrl: 'https://ext.same-assets.com/2523606736/1230877559.jpeg',
    link: '/program-3'
  }
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const carouselStyle: CSSProperties = {
    width: '100%',
    height: '400px',
    overflow: 'hidden',
    margin: '16px 0',
    backgroundColor: 'white',
    borderRadius: '4px'
  };

  const slideStyle = (index: number): CSSProperties => ({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: index === activeIndex ? 1 : 0,
    zIndex: index === activeIndex ? 10 : 0,
    transition: 'opacity 500ms'
  });

  const navDotsContainerStyle: CSSProperties = {
    position: 'absolute',
    bottom: '16px',
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    zIndex: 20
  };

  const navDotStyle = (isActive: boolean): CSSProperties => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: isActive ? 'white' : 'rgba(255, 255, 255, 0.6)',
    border: 'none',
    transition: 'background-color 300ms',
    cursor: 'pointer'
  });

  const navButtonStyle = (isLeft: boolean): CSSProperties => ({
    position: 'absolute',
    [isLeft ? 'left' : 'right']: '8px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer'
  });

  return (
    <div
      className="relative shadow"
      style={carouselStyle}
    >
      {/* Carousel items */}
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          style={slideStyle(index)}
        >
          <a href={item.link}>
            <img
              src={item.imageUrl}
              alt={`Slide ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </a>
        </div>
      ))}

      {/* Navigation buttons */}
      <div style={navDotsContainerStyle}>
        {carouselItems.map((_, index) => (
          <button
            key={index}
            style={navDotStyle(index === activeIndex)}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>

      {/* Previous/Next buttons */}
      <button
        style={navButtonStyle(true)}
        onClick={() => setActiveIndex((current) => (current - 1 + carouselItems.length) % carouselItems.length)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        style={navButtonStyle(false)}
        onClick={() => setActiveIndex((current) => (current + 1) % carouselItems.length)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
