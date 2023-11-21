import '../styles/bonjour.css';
const user = [
  {
    id: 12,
    userInfos: {
      firstName: 'Karl',
      lastName: 'Dovineau',
      age: 31,
    },
    todayScore: 0.12,
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50,
    },
  },
];

function Bonjour(props) {
  return (
    <div className='bonjour'>
      <div className='bonjour-title'>
        Bonjour <div className='prénom'>{props.firstName}</div>
      </div>
      <p className='message'>
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}

export default Bonjour;
