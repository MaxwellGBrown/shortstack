import React, { Component } from "react";
import { connect } from "react-redux";

import { appReducer } from "../reducer.js";
// import stylesheet from "../styles/main.scss";


const mapStateToProps = function(state, ownProps) { return {} };

const mapDispatchToProps = function(dispatch, ownProps) { return {} };

class App extends Component {

  render () {
    const headerClassName = 'header';
    // const headerClassName = stylesheet.header;

    return (
      <div>
        <h1 className={headerClassName}>
          Shortstack
        </h1>
      </div>
    );
  }
}

export { App };

export default connect(mapStateToProps, mapDispatchToProps)(App);
