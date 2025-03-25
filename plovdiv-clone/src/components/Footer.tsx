import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const linkStyle: CSSProperties = {
    color: '#666',
    marginRight: '16px'
  };

  return (
    <footer className="bg-white border-t" style={{ marginTop: '32px' }}>
      <div className="container" style={{ padding: '24px 16px' }}>
        <div className="flex" style={{ marginBottom: '16px', flexWrap: 'wrap' }}>
          <div style={{ marginBottom: '16px', width: '100%' }}>
            <Link to="/contacts" className="text-gray-700" style={linkStyle}>Контакти</Link>
            <Link to="/careers" className="text-gray-700" style={linkStyle}>Кариери</Link>
            <Link to="/links" className="text-gray-700" style={linkStyle}>Връзки</Link>
            <Link to="/donations" className="text-gray-700" style={linkStyle}>Дарения</Link>
            <Link to="/sitemap" className="text-gray-700" style={linkStyle}>Карта на сайта</Link>
            <Link to="/events" className="text-gray-700" style={linkStyle}>События</Link>
            <Link to="/complaints" className="text-gray-700" style={{ color: '#666' }}>Сигнали</Link>
          </div>
        </div>
        <div className="text-center" style={{ color: '#777', fontSize: '14px' }}>
          Copyright © Plovdiv Municipality 2004 - 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;
