import PropTypes from "prop-types";
import React from "react";
import "./EducationTile.css";

const EducationTile = ({
  src,
  title,
  institute,
  field,
  from,
  to,
  time,
  location,
  children,
}) => {
  return (
    <div className="education-tile">
      <img className="education-tile-img" src={src} alt={institute} />
      <div className="education-tile-content">
        <h3 className="education-tile-title">{title}</h3>
        <p className="education-tile-company">
          {institute} · {field}
        </p>
        <p className="education-tile-location">{location}</p>
        <p className="education-tile-time">
          {from} – {to} · {time}
        </p>
        {children && (
          <>
            <div className="block"></div>
            <p className="education-tile-description">{children}</p>
          </>
        )}
      </div>
    </div>
  );
};

EducationTile.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  company: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
};

export default EducationTile;
