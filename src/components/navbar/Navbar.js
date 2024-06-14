import './navbar.css';
import Sidebar from '../sidebar/Sidebar';
import githubIcone from './icons8-github-64.png';
import linkDinIcone from './icons8-linkedin-48.png';
import instagramIcon from './icons8-instagram-48 (1).png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className='wrapper'>
        <span>Nguer</span>
        <div className='social'>
          <a href='#'><img src={linkDinIcone} alt='LinkedIn' /></a>
          <a href='#'><img src={githubIcone} alt='Instagram' /></a>
          <a href='#'><img src={instagramIcon} alt='GitHub' /></a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
