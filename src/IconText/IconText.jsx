import React from "react";
import PropTypes from "prop-types";
import "./IconText.css";

const IconText = ({ icon, children }) => {
  return (
    <div className="icon-text">
      <span className="material-icons-outlined">{icon}</span>
      <span className="text">{children}</span>
    </div>
  );
};

IconText.propTypes = {
  icon: PropTypes.string,
};

export default IconText;
