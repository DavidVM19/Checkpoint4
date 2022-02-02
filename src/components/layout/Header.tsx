import Logo from "../../../resources/LogoPGWM.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="header__links">
        <Link to="/lobbies">Jouer maintenant</Link>
        <hr />
        <Link to="/create_bet">Lancer un pari</Link>
        <hr />
        <Link to="/connexion">Se connecter</Link>
      </div>
    </div>
  );
};

export default Header;
