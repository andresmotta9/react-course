// import React, { Fragment } from 'react';
import React from "react";
import PropTypes from "prop-types";

const FirstApp = ({ greet, subtitle }) => {
  // const person =  {
  //     name: 'Andres',
  //     age: 24,
  // }

  return (
    <>
      <h1> {greet} </h1>
      {/* <pre> { JSON.stringify( person, null, 3) } </pre> */}
      <p> {subtitle} </p>
    </>
  );
};

FirstApp.propTypes = {
  greet: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
    subtitle: 'I am a subtitle'
}

export default FirstApp;
