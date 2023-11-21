import React from 'react';
import '../styles/alimentation.css';

const Alimentation = (props) => {
  return (
    <div className='alimentation-widget'>
      <img src={props.src} alt='icone alimentaire'></img>
      <div className='alimentation-infos-container'>
        <p className='amount'>{props.amount}</p>
        <p className='title'>{props.title}</p>
      </div>
    </div>
  );
};

export default Alimentation;
