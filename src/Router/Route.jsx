import React, { Suspense } from "react";
import { Redirect } from "react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, SignUp, Profile, Header, Feed, EditProfile } from "./Index";

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(innerProps) =>
        localStorage.getItem("Token") ? (
          <Component {...innerProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

function Router() {
  const baseUrl = process.env.PUBLIC_URL;
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        {localStorage.getItem("Token") && <Header />}
        <Switch>
          <Route exact path={baseUrl + "/"} component={Login} />
          <Route path={baseUrl + "/register/"} component={SignUp} />
          <PrivateRoute
            path={baseUrl + "/User/:username/"}
            component={Profile}
          />
          <PrivateRoute path={baseUrl + "/feed/"} component={Feed} />
          <PrivateRoute
            path={baseUrl + "/edit/profile"}
            component={EditProfile}
          />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default Router;
