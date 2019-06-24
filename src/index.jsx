import React from 'react';
import PropTypes from 'prop-types';
import styles from './example.style';

const Example = ({ message }) => (
  <React.Fragment>
    <div className="message">{message}</div>
    <style jsx>{styles}</style>
  </React.Fragment>
);

Example.propTypes = {
  message: PropTypes.string.isRequired
};

export default Example;
