import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

interface ServiceItem {
  id: number;
  title: string;
  icon: React.ReactNode;
  link: string;
}

// SVG Icons for services
const OnlineServicesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const BudgetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
    <line x1="2" y1="10" x2="22" y2="10"></line>
    <circle cx="16" cy="15" r="2"></circle>
  </svg>
);

const TaxesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 12V8H6a2 2 0 1 1 0-4h12v4"></path>
    <path d="M20 12v4h-14a2 2 0 1 0 0 4h12v-4"></path>
    <circle cx="16" cy="6" r="2"></circle>
    <circle cx="8" cy="18" r="2"></circle>
  </svg>
);

const ConstructionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>
);

const EnvironmentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3c5.522 0 10 4.478 10 10 0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10 0-5.522 4.477-10 10-10z"></path>
    <path d="M12 17V3"></path>
    <path d="M5 10h14"></path>
  </svg>
);

const HealthIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 5H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
    <path d="M4 12V7a2 2 0 0 1 2-2h2"></path>
    <path d="M14 16h-2a2 2 0 0 0-2 2v.5"></path>
    <path d="M14 13h.01"></path>
  </svg>
);

const SocialIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const EducationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h20v14H2z"></path>
    <path d="M22 7H2"></path>
    <path d="M6 21h12"></path>
    <path d="M12 17v4"></path>
  </svg>
);

const CultureIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const TransportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
    <path d="M5 9l2 -4h8l2 4"></path>
    <path d="M5 9h14v5h-14z"></path>
  </svg>
);

const SportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M5.5 5.5l13 13"></path>
    <path d="M18.5 5.5l-13 13"></path>
  </svg>
);

const ProjectsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Електронни услуги',
    icon: <OnlineServicesIcon />,
    link: '/e-services'
  },
  {
    id: 2,
    title: 'Бюджет и финанси',
    icon: <BudgetIcon />,
    link: '/budget'
  },
  {
    id: 3,
    title: 'Данъци и такси',
    icon: <TaxesIcon />,
    link: '/taxes'
  },
  {
    id: 4,
    title: 'Градоустройство и Строителство',
    icon: <ConstructionIcon />,
    link: '/construction'
  },
  {
    id: 5,
    title: 'Околна среда',
    icon: <EnvironmentIcon />,
    link: '/environment'
  },
  {
    id: 6,
    title: 'Здраве',
    icon: <HealthIcon />,
    link: '/health'
  },
  {
    id: 7,
    title: 'Дирекция „Социална политика"',
    icon: <SocialIcon />,
    link: '/social'
  },
  {
    id: 8,
    title: 'Образование',
    icon: <EducationIcon />,
    link: '/education'
  },
  {
    id: 9,
    title: 'Култура',
    icon: <CultureIcon />,
    link: '/culture'
  },
  {
    id: 10,
    title: 'Транспорт',
    icon: <TransportIcon />,
    link: '/transport'
  },
  {
    id: 11,
    title: 'Спорт и младежки дейности',
    icon: <SportIcon />,
    link: '/sport'
  },
  {
    id: 12,
    title: 'Програми и проекти',
    icon: <ProjectsIcon />,
    link: '/projects'
  }
];

const ServiceGrid = () => {
  const gridStyle: CSSProperties = { margin: '32px 0' };

  const serviceItemStyle: CSSProperties = {
    padding: '16px',
    transition: 'all 0.3s ease',
    textAlign: 'center'
  };

  const iconContainerStyle: CSSProperties = {
    width: '64px',
    height: '64px',
    marginBottom: '8px'
  };

  const serviceTitleStyle: CSSProperties = {
    fontSize: '14px',
    fontWeight: '500'
  };

  return (
    <div className="service-grid" style={gridStyle}>
      {services.map((service) => (
        <Link
          key={service.id}
          to={service.link}
          className="flex flex-col items-center justify-center bg-white border rounded"
          style={serviceItemStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            e.currentTarget.style.transform = 'translateY(-5px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <div
            className="flex items-center justify-center bg-bgGray rounded-full mb-2"
            style={iconContainerStyle}
          >
            {service.icon}
          </div>
          <span className="text-center" style={serviceTitleStyle}>
            {service.title}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default ServiceGrid;
