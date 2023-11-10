import React from 'react';
import '../styles/alimentation.css';

// const data = [
//   {
//     id: 12,
//     userInfos: {
//       firstName: 'Karl',
//       lastName: 'Dovineau',
//       age: 31,
//     },
//     todayScore: 0.12,
//     keyData: {
//       calorieCount: 1930,
//       proteinCount: 155,
//       carbohydrateCount: 290,
//       lipidCount: 50,
//     },
//   },
// ];

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
