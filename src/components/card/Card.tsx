import React from 'react';

const Card = ({ children }) => {
  return (
    <div style={{width:"100%",height:"100%"}} className="card bg-light">
      <div className="card-body" style={{padding:'2px !important'}}>
        {children} 
      </div>
    </div>
  );
};

export default Card;
