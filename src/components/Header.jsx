import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/upload">Upload</Link>
      </div>
    </nav>
  );
};

export default Header;
