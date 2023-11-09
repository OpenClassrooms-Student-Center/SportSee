import '../styles/horizontalNav.css';

function HorizontalNav() {
  return (
    <div className='header'>
      <img
        className='logo'
        src={require('../img/logo.png')}
        alt='Logo SportSee'></img>
      <nav className='navbar'>
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglages</li>
        <li>Communauté</li>
      </nav>
    </div>
  );
}

export default HorizontalNav;
