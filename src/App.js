import WelcomePage from "./pages/WelcomePage";
import "./App.css";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}

      {/* <WelcomePage /> */}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
