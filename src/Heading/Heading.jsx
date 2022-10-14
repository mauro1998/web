import React from 'react';
import './Heading.css';

const Heading = ({ children }) => {
  return <h2 className="heading">{children}</h2>;
};

Heading.propTypes = {};

export default Heading;
