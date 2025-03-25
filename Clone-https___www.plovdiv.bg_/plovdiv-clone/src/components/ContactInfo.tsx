import React, { CSSProperties } from 'react';

const ContactInfo = () => {
  const boxStyle: CSSProperties = {
    padding: '16px',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center' as const,
    height: '100%'
  };

  return (
    <div className="bg-white" style={{ padding: '12px 0' }}>
      <div className="container" style={{ display: 'grid', gridGap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {/* Air quality */}
        <div style={boxStyle}>
          <span style={{ fontWeight: '500' }}>Качество на атмосферния въздух в реално време</span>
        </div>

        {/* Contact center */}
        <div style={{ ...boxStyle, flexDirection: 'column' as const }}>
          <span style={{ fontWeight: '500', marginBottom: '4px' }}>Контактен център на Община Пловдив:</span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="https://ext.same-assets.com/2523606736/1178509451.gif"
              alt="Phone"
              style={{ marginRight: '8px', height: '16px' }}
            />
            <a href="tel:0800112" style={{ color: '#e53e3e', fontWeight: '700', fontSize: '18px' }}>0800 112 32</a>
          </div>
          <div style={{ fontSize: '14px', marginTop: '4px' }}>В работни дни от 9 часа до 17 часа</div>
        </div>

        {/* Fines and penalties */}
        <div style={boxStyle}>
          <span style={{ fontWeight: '500' }}>Проверка и плащане на глоби с фиш и наказателни постановления</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
