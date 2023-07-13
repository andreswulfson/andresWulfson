import React from 'react';
import PropTypes from 'prop-types';

function SectionTitle({ children, variant, id }) {
  return (
    <h2
      className={`section__title ${variant ? 'section__title--2' : ''}`}
      id={id}
    >
      {children}
    </h2>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.bool,
  id: PropTypes.string,
};

SectionTitle.defaultProps = {
  variant: false,
  id: '',
};
export default SectionTitle;
