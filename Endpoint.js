import React from 'react';

const Endpoint = ({ children, req }) => (
  <div
    style={{
      backgroundColor: 'light',
      borderRadius: '4px',
      color: 'black',
      padding: '0.5rem',
      border: '2px',
      // borderStyle: 'solid',
      // borderColor: '#3578e5',
      width: '600px',
    }}>
    <a
      style={{
        backgroundColor: '#3578e5',
        borderRadius: '2px',
        color: 'black',
        padding: '0.3rem',
        alignItems: 'center',
         marginRight: '5px'

    }}>
      {req}
  </a>
    {children}
  </div>
);

export default Endpoint;