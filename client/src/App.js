import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Characters from "./pages/Characters/Characters";
import Combat from "./pages/Combat/Combat";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/combat" component={Combat} />
          <Route path="*" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
