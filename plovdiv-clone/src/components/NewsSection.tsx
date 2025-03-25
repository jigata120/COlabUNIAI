import React, { useState, CSSProperties } from 'react';
import { Link } from 'react-router-dom';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  link: string;
}

// Sample news data
const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'МБАЛ Св. Мина вече разполага с първия в Пловдив ЕКГ апарат с изкуствен интелект',
    excerpt: 'МБАЛ „Св. Мина" получи като дарение животноважна кардио апаратура – ЕКГ апарат с изкуствен интелект.',
    date: 'Monday, 24 March 2025',
    imageUrl: 'https://ext.same-assets.com/2523606736/2541328250.jpeg',
    link: '/news/1'
  },
  {
    id: 2,
    title: 'Пиратски уикенд очаква малчуганите в Природонаучния музей в Пловдив',
    excerpt: '24.03.2025 Занимателен „Пиратски уикенд в Музея" очаква малчуганите следващата събота – 3 април в Природонаучния музей в Пловдив.',
    date: 'Monday, 24 March 2025',
    imageUrl: 'https://ext.same-assets.com/2523606736/13952880.jpeg',
    link: '/news/2'
  },
  {
    id: 3,
    title: 'Започва 11-ият Национален ученически конкурс по актьорско майсторство в Пловдив',
    excerpt: '24.03.2025 Организатор и домакин е Националната гимназия за сценични и екранни изкуства. Заместник-кметът по култура, археология и туризъм на община Пловдив Пламен Панов.',
    date: 'Monday, 24 March 2025',
    imageUrl: 'https://ext.same-assets.com/2523606736/63892721.jpeg',
    link: '/news/3'
  },
  {
    id: 4,
    title: 'График за почистване на дъждоприемни шахти от 24 до 28 март',
    excerpt: '24.03.2025 Почистването на дъждоприемните шахти в Пловдив продължава по график и другата седмица.',
    date: 'Monday, 24 March 2025',
    imageUrl: 'https://ext.same-assets.com/2523606736/4138749788.jpeg',
    link: '/news/4'
  }
];

const NewsSection = () => {
  const [activeTab, setActiveTab] = useState('plovdiv-today');

  const tabStyle: CSSProperties = {
    padding: '8px 4px',
    marginRight: '32px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    borderBottom: '2px solid transparent'
  };

  const activeTabStyle: CSSProperties = {
    ...tabStyle,
    color: 'var(--primary-color)',
    borderBottom: '2px solid var(--primary-color)'
  };

  const inactiveTabStyle: CSSProperties = {
    ...tabStyle,
    color: '#666',
    borderBottom: '2px solid transparent'
  };

  const linkHoverStyle: CSSProperties = {
    color: 'var(--primary-color)',
    textDecoration: 'none'
  };

  return (
    <div style={{ margin: '32px 0' }}>
      <div style={{ borderBottom: '1px solid #e0e0e0', marginBottom: '16px' }}>
        <nav style={{ display: 'flex', marginBottom: '-2px' }}>
          <button
            style={activeTab === 'plovdiv-today' ? activeTabStyle : inactiveTabStyle}
            onClick={() => setActiveTab('plovdiv-today')}
          >
            ПЛОВДИВ ДНЕС
          </button>
          <button
            style={activeTab === 'latest-news' ? activeTabStyle : inactiveTabStyle}
            onClick={() => setActiveTab('latest-news')}
          >
            АКТУАЛНО
          </button>
          <button
            style={activeTab === 'events' ? activeTabStyle : inactiveTabStyle}
            onClick={() => setActiveTab('events')}
          >
            СЪБИТИЯ
          </button>

          <div style={{ flexGrow: 1 }}></div>

          <Link to="/news" style={{
            fontSize: '14px',
            color: 'var(--primary-color)',
            display: 'flex',
            alignItems: 'center'
          }}>
            Виж всички &raquo;
          </Link>
        </nav>
      </div>

      <div className="news-grid">
        {newsItems.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-white border rounded overflow-hidden"
          >
            <Link to={item.link}>
              <img
                src={item.imageUrl}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              />
            </Link>
            <div style={{ padding: '16px' }}>
              <div style={{ fontSize: '14px', color: '#777', marginBottom: '8px' }}>
                {item.date}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                <Link
                  to={item.link}
                  style={linkHoverStyle}
                  onMouseOver={(e) => {
                    e.currentTarget.style.textDecoration = 'underline';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.textDecoration = 'none';
                  }}
                >
                  {item.title}
                </Link>
              </h3>
              <p style={{ fontSize: '14px', color: '#444' }}>{item.excerpt}</p>
              <Link
                to={item.link}
                style={{
                  color: 'var(--primary-color)',
                  fontSize: '14px',
                  display: 'inline-block',
                  marginTop: '8px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.textDecoration = 'underline';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.textDecoration = 'none';
                }}
              >
                Прочети повече &raquo;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
