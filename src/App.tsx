import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/layout/Header";
import CreateBet from "./components/CreateBet";

const App = () => {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create_bet" element={<CreateBet />} />
          {/* <Route path="/lobbies" element={<Lobbies />} />
          <Route path="/login" element={<Connection />} /> */}
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
