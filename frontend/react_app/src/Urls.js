import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";

// A wrapper for <Route> that redirects to the login screen if you're not yet authenticated.
function PrivateRoute({ isAuthenticated, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function Urls(props) {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login/">
            {" "}
            <Login {...props} />
          </Route>
          <Route exact path="/">
            {" "}
            <Home {...props} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Urls;
