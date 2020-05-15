import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import { ROUTE_PATHS } from "./common/appConstants";
import DetailView from "./components/DetailView/DetailView";
import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";
import UpdateUserDetails from "./components/UpdateUserDetails/UpdateUserDetails";

class App extends Component {
  state = {
    accountBalance: 100,
    packs: [],
    channels: [],
    services: [],
    user: {
      username: "",
      email: "",
      contact: "",
    },
  };

  addBalance = (amountToAdd) => {
    this.setState((prevState) => ({
      accountBalance: prevState.accountBalance + amountToAdd,
    }));
  };

  subscribe = ({ type, amount, values }) => {
    this.setState((prevState) => ({
      [type]: [...prevState[type], ...values],
      accountBalance: prevState.accountBalance - amount,
    }));
  };

  updateUser = (user) => {
    this.setState({
      user
    });
  };

  render() {
    return (
      <div className="App">
        <Header user={this.state.user}/>
        <Switch>
          {/* Route for Home page with Menu */}
          <Route exact path={ROUTE_PATHS.HOME} component={Home} />

          {/* Route for balance, recharge, subscribe(pack, channel, service) */}
          <Route
            path={[
              ROUTE_PATHS.BALANCE,
              ROUTE_PATHS.RECHARGE,
              ROUTE_PATHS.SUBSCRIBE,
            ]}
            render={(routeProps) => (
              <DetailView
                subscribe={this.subscribe}
                accountBalance={this.state.accountBalance}
                addBalance={this.addBalance}
                packs={this.state.packs}
                channels={this.state.channels}
                services={this.state.services}
                {...routeProps}
              />
            )}
          />

          <Route exact path={ROUTE_PATHS.CATALOG} component={Catalog} />

          <Route
            exact
            path={ROUTE_PATHS.CURRENT_SUBSCRIPTION}
            render={() => (
              <Catalog
                packs={this.state.packs}
                channels={this.state.channels}
                services={this.state.services}
              />
            )}
          />

          <Route
            exact
            path={ROUTE_PATHS.UPDATE_DETAILS}
            render={() => <UpdateUserDetails user={this.state.user} updateUser={this.updateUser} />}
          />

          {/* Default Redirection to Home, if any unsupported Route is executed */}
          <Redirect to={ROUTE_PATHS.HOME} />
        </Switch>
      </div>
    );
  }
}

export default App;
