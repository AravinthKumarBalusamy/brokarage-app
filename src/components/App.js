import React from "react";
import { Switch, Route } from "react-router-dom";
import Registration from "./Registration/Registration";
import {
  ClientList,
  BranchPayout,
  Brokarage,
  ClientPayout,
  Investment,
  PortFolio,
} from "./clients";
import Login from "./Registration/Login";
import { NavBar } from "./Header/NavBar";
import { SideBar } from "./SideBar/SideBar";
import { useStateValue } from "../store/Provider";

export const App = () => {
  const [{ user, pathname }, dispatch] = useStateValue();

  const getComponent = (name) => {
    switch (name) {
      case "client":
        return <ClientList />;
      case "signup":
        return <Registration />;
      case "brokarage":
        return <Brokarage />;
      case "portfoliogroup":
        return <PortFolio />;
      case "clientpayout":
        return <ClientPayout />;
      case "branchpayout":
        return <BranchPayout />;
      case "investment":
        return <Investment />;
      default:
        return <ClientList />;
    }
  };
  return (
    <section id="container">
      <NavBar />
      <div className="container main-container mt-3">
        {/* <SideBar/> */}
        <Switch>
          <Route exact path={["/", "/client"]}>
            {getComponent(pathname)}
          </Route>
          <Route exact path="/auth" component={Login} />
        </Switch>
      </div>
    </section>
  );
};
