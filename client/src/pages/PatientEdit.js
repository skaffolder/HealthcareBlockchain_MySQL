// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Custom Actions


// START IMPORT ACTIONS
import PatientActions from "../redux/actions/PatientActions";
import DoctorActions from "../redux/actions/DoctorActions";

// END IMPORT ACTIONS

/** APIs

* actionsPatient.create
*	@description CRUD ACTION create
*
* actionsDoctor.findBypatients
*	@description CRUD ACTION findBypatients
*	@param Objectid key - Id della risorsa patients da cercare
*
* actionsPatient.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsPatient.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*

**/

class PatientEdit extends Component {
  // Init patient
  constructor(props) {
    super(props);
    this.state = {
      patient: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsPatient.loadPatient(this.props.match.params.id);
      this.props.actionsDoctor.findBypatients(this.props.match.params.id);
    }
    
  }

  // Insert props patient in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      patient: props.patient
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.patient._id) {
      this.props.actionsPatient.savePatient(this.state.patient).then(data => {
        this.props.history.push("/patients/");
      });
    } else {
      this.props.actionsPatient.createPatient(this.state.patient).then(data => {
        this.props.history.push("/patients/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Patient Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="name"
            label="Name"
            value={this.state.patient.name || ""}
            onChange={Utils.handleChange.bind(this, "patient")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="surname"
            label="Surname"
            value={this.state.patient.surname || ""}
            onChange={Utils.handleChange.bind(this, "patient")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with Doctor */}
          
          <h3>Doctor</h3>
          {(!this.props.listDoctor || this.props.listDoctor.length === 0) && 
            <div>No Doctor associated</div>
          }
          {this.props.listDoctor &&
            this.props.listDoctor.map((item, i) => {
              return (
                <Link to={"/doctors/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/patients/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsPatient: bindActionCreators(PatientActions, dispatch),
    actionsDoctor: bindActionCreators(DoctorActions, dispatch),
  };
};

// Validate types
PatientEdit.propTypes = { 
  actionsPatient: PropTypes.object.isRequired,
  actionsDoctor: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    patient: state.PatientEditReducer.patient,
    listDoctor: state.PatientEditReducer.listDoctor
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientEdit);
