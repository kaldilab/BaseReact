import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import Static from "./pages/static";
import Post from "./pages/post";
import Form from "./pages/form";

const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header className="fixed-top">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">
              TYPING
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav">
                <li className="navbar-item">
                  <NavLink
                    exact
                    to="/static"
                    className="nav-link"
                    activeClassName="active"
                  >
                    STATIC
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink
                    exact
                    to="/post"
                    className="nav-link"
                    activeClassName="active"
                  >
                    POST
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink
                    exact
                    to="/form"
                    className="nav-link"
                    activeClassName="active"
                  >
                    FORM
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <h2 className="py-4 text-center">Home</h2>
              <p className="py-5 text-center">React + Typescript</p>
            </Route>
            <Route exact path="/static">
              <h2 className="py-4 text-center">Static</h2>
              <Static />
            </Route>
            <Route exact path="/post">
              <h2 className="py-4 text-center">Post</h2>
              <Post />
            </Route>
            <Route exact path="/form">
              <h2 className="py-4 text-center">Form</h2>
              <Form />
            </Route>
          </Switch>
        </main>
        <footer className="py-5 text-center bg-dark text-light">@kaldi</footer>
      </div>
    </Router>
  );
};

export default App;
