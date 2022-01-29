/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/Error.css'

export default function Error({ currentLocationErrorStatus, noLocationFoundErrorStatus, unitsErrorStatus }) {
  let errorCardTextTitle, errorCardText;
  if (currentLocationErrorStatus === true) {
    errorCardTextTitle = "I wasn't able to get your current location."
    errorCardText = "Make sure your browser is allowing this app to get your current location, or try searching by city instead. "; 
  } else if (noLocationFoundErrorStatus === true) {
    errorCardTextTitle = "It doesn't seem like I was able to find your city..." 
    errorCardText = "If you're searching within a state, make sure to spell out the state fully (e.g. type \"Illinois\", instead of \"IL\").";
  } else if (unitsErrorStatus === true) {
    errorCardText = "I wasn't able to change your units.";
    errorCardText = "Try again, or contact my author if this persists(see footer below).";
  }
  return (
    <div className="error-container">
      <div className="error-card">
        <div className="error-title">Oops, it looks like there was an error!</div>
        <div className="error-description-title">{errorCardTextTitle}</div>
        <div className="error-description">{errorCardText}</div>
      </div>
    </div>
  );
}
