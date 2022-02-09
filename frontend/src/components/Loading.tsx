import React from 'react';
import '../scss/Loading.scss';

const Loading = () => {
  return(
    <div className="loading-container">
      <i className="fas fa-circle-notch fa-2x fa-spin"></i>
    </div>
  );
};

export default Loading;