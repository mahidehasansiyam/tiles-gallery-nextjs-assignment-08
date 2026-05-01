import React from 'react';

const Notfound = () => {
  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5', // Light background for contrast
      }}
    >
      <div
        style={{
          textAlign: 'center',
          padding: '40px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          backgroundColor: '#fff',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <h1 style={{ fontSize: '48px', color: '#dc3545' }}>404</h1>
        <p style={{ fontSize: '24px', color: '#555' }}>Page Not Found</p>
        <p style={{ color: '#777' }}>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '5px',
          }}
        >
          Go back to Homepage
        </a>
      </div>
    </div>
  );
};

export default Notfound;