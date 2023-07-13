import React from 'react';
import PropTypes from 'prop-types';

function PageSubtitle({ children }) {
  return <p className="page__sub">{children}</p>;
}

PageSubtitle.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PageSubtitle;
