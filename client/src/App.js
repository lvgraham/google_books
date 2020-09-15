import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/search"]} component={Search} />
          <Route exact path="/saved" component={Saved}/>
          <Route exact path='/*' component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
