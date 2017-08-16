import React from "react";
import { connect } from "react-redux";

import Header from "./header";

const App = () => (
  <div>
    <Header>
      Shortstack
    </Header>
  </div>
);

export { App };

export default connect(null, null)(App);
