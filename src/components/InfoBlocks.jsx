import React from 'react';
import PropTypes from 'prop-types';

function InfoBlocks({ children, title, id }) {
  return (
    <div className="infoBlock" id={id}>
      <div className="infoBlock__title">{title}</div>

      <div className="infoBlock__description">{children}</div>
    </div>
  );
}

InfoBlocks.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  id: PropTypes.string,
};

InfoBlocks.defaultProps = {
  id: '',
};
export default InfoBlocks;
