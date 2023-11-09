import '../styles/verticalNav.css';
import img1 from '../img/méditation.png';
import img2 from '../img/nage.png';
import img3 from '../img/vélo.png';
import img4 from '../img/musculation.png';

function HorizontalNav() {
  return (
    <div className='vertical-menu'>
      <nav className='vertical-navbar'>
        <img src={img1} alt='logo méditation'></img>
        <img src={img2} alt='logo nage'></img>
        <img src={img3} alt='logo vélo'></img>
        <img src={img4} alt='logo musculation'></img>
      </nav>
      <p className='copyright'>Copyright, SportSee 2020</p>
    </div>
  );
}

export default HorizontalNav;
