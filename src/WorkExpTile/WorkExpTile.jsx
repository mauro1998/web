import PropTypes from "prop-types";
import React from "react";
import "./WorkExpTile.css";

const WorkExpTile = ({
  src,
  title,
  company,
  type,
  from,
  to,
  time,
  children,
  ...props
}) => {
  return (
    <div className="work-exp-tile" {...props}>
      <img className="work-exp-tile-img" src={src} alt={company} />
      <div className="work-exp-tile-content">
        <h3 className="work-exp-tile-title">{title}</h3>
        <p className="work-exp-tile-company">
          {company} · {type}
        </p>
        <p className="work-exp-tile-time">
          {from} – {to} · {time}
        </p>
        {children && (
          <>
            <div className="block"></div>
            <p className="work-exp-tile-description">{children}</p>
          </>
        )}
      </div>
    </div>
  );
};

WorkExpTile.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  company: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
};

export default WorkExpTile;
