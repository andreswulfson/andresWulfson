import React from 'react';
import PropTypes from 'prop-types';

function SectionSubTitle({ children }) {
  return <h2 className="section__sub">{children}</h2>;
}

SectionSubTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
export default SectionSubTitle;
