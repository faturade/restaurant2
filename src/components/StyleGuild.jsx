import React from 'react';

const StyleGuild = ({ activeButton }) => {
  return (
    <div className="bg-custom-orange text-center p-8">
      <p className="text-white font-bold" style={{ borderBottom: '1px solid #3E3939', borderTop: '1px solid #3E3939', display: 'inline-block', fontSize: '30px' }}>{activeButton}</p>
    </div>
  );
};

export default StyleGuild;
