import Poster from "../../../resources/homePGWM.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home__poster">
        <img src={Poster} alt="PGWM" />
      </div>
      <h1>Bienvenue sur PGWM / Play Games Win Money !</h1>
      <div className="home__body">
        <p>
          Tous les joueurs veulent tester leur talent. PGWM est{" "}
          <strong>LE</strong> site sur lequel vous pouvez parier sur vous-même
          dans des compétitions de jeux vidéo. Vous pouvez jouer contre des
          joueurs du monde entier, en quelques clics et prouver votre maîtrise
          des plus grands jeux videos.{" "}
        </p>
        <br />
        <p>
          FIFA, NBA 2K, Call Of Duty, le but est simple :{" "}
          <strong>LA VICTOIRE OU RIEN</strong>
        </p>
        <p>
          Alors n'attendez plus, inscrivez vous et affrontez les adversaires
          pour prouver votre valeur !
        </p>
        <Link to="/connection">
          <button type="button" className="btn">
            Goooo !
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
