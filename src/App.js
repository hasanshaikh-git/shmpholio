import "antd/dist/antd.css";
import Home from "./components/Home"
import React, { useLayoutEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

function App(props) {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window && window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Switch>
        <Route path="/">
          <Home />
        </Route>  
      </Switch>
  );
}

export default App;
