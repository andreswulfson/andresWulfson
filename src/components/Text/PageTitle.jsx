import React from 'react';
import PropTypes from 'prop-types';

function PageTitle({ children }) {
  return <h1 className="page__title">{children}</h1>;
}

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PageTitle;
