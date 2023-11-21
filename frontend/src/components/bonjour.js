import '../styles/bonjour.css';

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
