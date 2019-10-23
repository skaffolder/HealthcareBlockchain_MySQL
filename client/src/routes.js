// Dependencies
import React, { Component } from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import { PrivateRoute } from "./security/PrivateRoute";

// Material UI
import Paper from "@material-ui/core/Paper";

/* START MY VIEWS IMPORT */

import DoctorEdit from "./pages/DoctorEdit";
import DoctorList from "./pages/DoctorList";
import PatientEdit from "./pages/PatientEdit";
import PatientList from "./pages/PatientList";
import ReportEdit from "./pages/ReportEdit";
import ReportList from "./pages/ReportList";

/* END MY VIEWS IMPORT */

// CUSTOM VIEWS
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Fragment>
          <Paper>
            <div className="main-cointainer">
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/users/:id" component={UserEdit} roles={["ADMIN"]}/>
              <PrivateRoute exact path="/users" component={UserList} roles={["ADMIN"]}/>
              
              {/* CUSTOM VIEWS */}

              <PrivateRoute exact path="/home" component={Home} />

              {/* START MY VIEWS */}

              <PrivateRoute exact path="/doctors/:id" component={ DoctorEdit }  />
              <PrivateRoute exact path="/doctors" component={ DoctorList }  />
              <PrivateRoute exact path="/patients/:id" component={ PatientEdit }  />
              <PrivateRoute exact path="/patients" component={ PatientList }  />
              <PrivateRoute exact path="/reports/:id" component={ ReportEdit }  />
              <PrivateRoute exact path="/reports" component={ ReportList }  />

             {/* END MY VIEWS */}

            </div>
          </Paper>
        </Fragment>
      </Switch>
    );
  }
}

export default Routes;