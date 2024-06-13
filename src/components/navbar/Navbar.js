import './navbar.css';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className='wrapper'>
        <span>Nguer</span>
        <div className='social'>
          <a href='#'><img src='/assets/icons8-linkedin-48.png' alt='LinkedIn' /></a>
          <a href='#'><img src='/assets/icons8-instagram-48 (1).png' alt='Instagram' /></a>
          <a href='#'><img src='/assets/icons8-github-64.png' alt='GitHub' /></a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
