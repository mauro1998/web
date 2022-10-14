import PropTypes from 'prop-types';
import React from 'react';
import './WorkExpTile.css';

function computeTime(dateFrom, dateTo) {
  const total =
    dateTo.getMonth() -
    dateFrom.getMonth() +
    12 * (dateTo.getFullYear() - dateFrom.getFullYear());
  const years = Math.floor(total / 12);
  const months = total % 12;
  const monthsStr = months > 0 ? `${months} mos` : '';

  if (years === 0) return monthsStr;

  return `${years} yr ${monthsStr}`.trim();
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
}

const WorkExpTile = ({
  src,
  title,
  company,
  type,
  from,
  to,
  children,
  ...props
}) => {
  const time = computeTime(from, to ? to : new Date());
  const formattedFrom = formatDate(from);
  const formattedTo = to ? formatDate(to) : 'Present';

  return (
    <div className="work-exp-tile" {...props}>
      <img className="work-exp-tile-img" src={src} alt={company} />
      <div className="work-exp-tile-content">
        <h3 className="work-exp-tile-title">{title}</h3>
        <p className="work-exp-tile-company">
          {company} · {type}
        </p>
        <p className="work-exp-tile-time">
          {formattedFrom} – {formattedTo} · {time}
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
  from: PropTypes.object,
  to: PropTypes.object,
};

export default WorkExpTile;
