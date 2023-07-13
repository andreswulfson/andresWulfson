import React from 'react';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';

function LogosCard({ children, to }) {
  return (
    <HashLink className="logo-box__white no_hover" to={to}>
      <div className="card__image">{children}</div>
    </HashLink>
  );
}

LogosCard.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default LogosCard;
