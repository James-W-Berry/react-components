import React from "react";
import { Switch, Route } from "react-router-dom";
import Routes from "./organization/Routes";
import NavigationBar from "./organization/NavigationBar";
import "./App.css";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Switch>
        {Routes.map((route) => (
          <Route exact path={route.path} key={route.path}>
            <div
              style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "#f8f9fa",
              }}
            >
              <route.component />
            </div>
          </Route>
        ))}
      </Switch>
    </div>
  );
};

export default App;
