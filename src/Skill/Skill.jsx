import PropTypes from "prop-types";
import React from "react";
import "./Skill.css";

const Skill = ({ children, stars }) => {
  const total = 5;
  const icons = [];
  const rated = +stars.toFixed(1);

  for (let i = 1; i <= total; i++) {
    if (i <= rated) {
      icons.push('star');
    } else if (rated < i && Math.round(rated) === i) {
      icons.push("star_half");
    } else {
      icons.push("star_border");
    }
  }

  return (
    <div className="skill">
      <span className="skill-text">{children}</span>
      <div className="skill-stars">
        {icons.map((icon, i) => (
          <span key={i} className="material-icons-outlined">
            {icon}
          </span>
        ))}
      </div>
    </div>
  );
};

Skill.propTypes = {
  stars: PropTypes.number,
};

export default Skill;
