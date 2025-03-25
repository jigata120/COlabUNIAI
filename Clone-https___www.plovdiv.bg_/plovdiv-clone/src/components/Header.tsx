import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const topBarStyle: CSSProperties = { height: '8px' };

  const logoStyle: CSSProperties = { height: '64px' };

  const socialIconStyle: CSSProperties = { height: '32px', width: '32px' };

  const flagStyle: CSSProperties = { height: '24px', width: '24px' };

  const searchContainerStyle: CSSProperties = { height: '40px' };

  const searchInputStyle: CSSProperties = {
    border: '1px solid #ccc',
    borderRadius: '4px 0 0 4px',
    padding: '0 8px'
  };

  const searchButtonStyle: CSSProperties = {
    padding: '0 12px',
    borderRadius: '0 4px 4px 0',
    border: 'none'
  };

  const homeIconStyle: CSSProperties = { height: '20px', width: '20px', marginRight: '4px' };

  return (
    <header>
      {/* Top green bar */}
      <div className="bg-primary" style={topBarStyle}></div>

      {/* Main header with logo and search */}
      <div className="bg-white py-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/">
              <img
                src="https://ext.same-assets.com/2523606736/1984727699.png"
                alt="Община Пловдив"
                style={logoStyle}
              />
            </Link>
            <h1 className="text-2xl font-bold text-primary">Община Пловдив</h1>
          </div>

          {/* Social icons */}
          <div className="flex gap-2">
            <a href="https://www.facebook.com/pages/Plovdiv/298150390280406/" target="_blank" rel="noopener noreferrer">
              <img src="https://ext.same-assets.com/2523606736/1281308292.png" alt="Facebook" style={socialIconStyle} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://ext.same-assets.com/2523606736/1681931753.png" alt="Twitter" style={socialIconStyle} />
            </a>
            <a href="https://www.plovdiv.bg/rss-feeds" target="_blank" rel="noopener noreferrer">
              <img src="https://ext.same-assets.com/2523606736/4131266751.png" alt="RSS" style={socialIconStyle} />
            </a>
            <a href="https://www.youtube.com/user/MunicipalityPlovdiv/" target="_blank" rel="noopener noreferrer">
              <img src="https://ext.same-assets.com/2523606736/3616179277.png" alt="YouTube" style={socialIconStyle} />
            </a>
          </div>

          {/* Language selection and search */}
          <div className="flex gap-4">
            <div className="flex gap-2">
              <a href="/" className="flex items-center gap-1">
                <img src="https://ext.same-assets.com/2523606736/3596289414.png" alt="Bulgarian" style={flagStyle} />
              </a>
              <a href="/en" className="flex items-center gap-1">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/255px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" alt="English" style={flagStyle} />
              </a>
            </div>

            <div className="flex" style={searchContainerStyle}>
              <input
                type="text"
                placeholder="Търси..."
                style={searchInputStyle}
              />
              <button
                className="bg-primary text-white"
                style={searchButtonStyle}
              >
                Търси
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation menu */}
      <nav className="main-nav bg-bgGray border-y">
        <div className="container">
          <ul>
            <li>
              <Link to="/" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" style={homeIconStyle} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/business">БИЗНЕС</Link>
            </li>
            <li>
              <Link to="/citizens">ГРАЖДАНИ</Link>
            </li>
            <li>
              <Link to="/tourists">ТУРИСТИ</Link>
            </li>
            <li>
              <Link to="/services">УСЛУГИ</Link>
            </li>
            <li>
              <Link to="/administration">АДМИНИСТРАЦИЯ</Link>
            </li>
            <li>
              <Link to="/council">ОБЩИНСКИ СЪВЕТ</Link>
            </li>
            <li>
              <Link to="/districts">РАЙОНИ</Link>
            </li>
            <li>
              <Link to="/news">НОВИНИ</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
