import Poster from "../../../resources/homePGWM.png";
import Header from "../layout/Header";

const Home = () => {
  return (
    <div className="home">
      <div className="home__poster">
        <img src={Poster} alt="PGWM" />
      </div>
      <h1>Bienvenue sur PGWM / Play Games Win Money !</h1>
    </div>
  );
};

export default Home;
