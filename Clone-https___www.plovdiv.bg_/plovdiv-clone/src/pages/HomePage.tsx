import React, { CSSProperties } from 'react';
import Carousel from '../components/Carousel';
import ContactInfo from '../components/ContactInfo';
import ServiceGrid from '../components/ServiceGrid';
import NewsSection from '../components/NewsSection';

const HomePage = () => {
  const containerStyle: CSSProperties = { padding: '24px 16px' };

  const headingStyle: CSSProperties = {
    fontSize: '20px',
    fontWeight: '600',
    color: 'var(--primary-color)',
    marginBottom: '16px'
  };

  const bannerStyle: CSSProperties = {
    backgroundColor: '#E4F4C3',
    padding: '16px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '32px'
  };

  const bannerHeaderStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
    marginBottom: '16px'
  };

  const bannerTitleStyle: CSSProperties = {
    fontSize: '18px',
    fontWeight: '600',
    color: 'var(--primary-color)'
  };

  const bannerContentStyle: CSSProperties = {
    textAlign: 'center',
    marginBottom: '16px'
  };

  const bannerHeadingStyle: CSSProperties = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '8px'
  };

  const paragraphStyle: CSSProperties = {
    color: '#444',
    marginBottom: '4px'
  };

  return (
    <div className="bg-bgGray">
      <ContactInfo />

      <div className="container" style={containerStyle}>
        <h2 style={headingStyle}>
          АКЦЕНТИ
        </h2>
        <Carousel />

        <ServiceGrid />

        <NewsSection />

        {/* EU Projects Banner */}
        <div style={bannerStyle}>
          <div style={bannerHeaderStyle}>
            <img src="https://ext.same-assets.com/2523606736/439217631.png" alt="EU Flag" style={{ height: '48px' }} />
            <div style={bannerTitleStyle}>
              Съфинансирано от Европейския съюз
            </div>
          </div>
          <div style={bannerContentStyle}>
            <h3 style={bannerHeadingStyle}>
              Програма за храни и основно материално подпомагане 2021-2027
            </h3>
            <p style={paragraphStyle}>съфинансирана от Европейски социален фонд плюс.</p>
            <p style={paragraphStyle}>Проект: BG05SFPR003-1.001-016-C04</p>
            <p style={paragraphStyle}>Топъл обяд в Община Пловдив</p>
            <p style={paragraphStyle}>Срок на изпълнение: 01.10.2022г. – 17.05.2025 г.</p>
            <p style={paragraphStyle}>Размер на БФП: 4 775 144,44 лева</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
