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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";

// Custom Actions


// START IMPORT ACTIONS
import DoctorActions from "../redux/actions/DoctorActions";
import ReportActions from "../redux/actions/ReportActions";
import PatientActions from "../redux/actions/PatientActions";

// END IMPORT ACTIONS

/** APIs

* actionsDoctor.create
*	@description CRUD ACTION create
*
* actionsReport.findBydoctor
*	@description CRUD ACTION findBydoctor
*	@param Objectid key - Id della risorsa doctor da cercare
*
* actionsDoctor.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsPatient.list
*	@description CRUD ACTION list
*
* actionsDoctor.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*

**/

class DoctorEdit extends Component {
  // Init doctor
  constructor(props) {
    super(props);
    this.state = {
      doctor: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsDoctor.loadDoctor(this.props.match.params.id);
      this.props.actionsReport.findBydoctor(this.props.match.params.id);
    }
    
    this.props.actionsPatient.loadPatientList();
  }

  // Insert props doctor in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      doctor: props.doctor
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.doctor._id) {
      this.props.actionsDoctor.saveDoctor(this.state.doctor).then(data => {
        this.props.history.push("/doctors/");
      });
    } else {
      this.props.actionsDoctor.createDoctor(this.state.doctor).then(data => {
        this.props.history.push("/doctors/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Doctor Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="name"
            label="Name"
            value={this.state.doctor.name || ""}
            onChange={Utils.handleChange.bind(this, "doctor")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation m:m patients with Patient */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="patients">Patients</InputLabel>
            <Select
              multiple
              value={this.state.doctor.patients || []}
              onChange={Utils.handleChangeSelect.bind(this, "doctor")}
              input={<Input id="patients" name="patients" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listPatient && this.props.listPatient.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.doctor.patients &&
                      this.state.doctor.patients.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with Report */}
          
          <h3>Report</h3>
          {(!this.props.listReport || this.props.listReport.length === 0) && 
            <div>No Report associated</div>
          }
          {this.props.listReport &&
            this.props.listReport.map((item, i) => {
              return (
                <Link to={"/reports/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/doctors/">Back to list</Link>

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
    actionsDoctor: bindActionCreators(DoctorActions, dispatch),
    actionsReport: bindActionCreators(ReportActions, dispatch),
    actionsPatient: bindActionCreators(PatientActions, dispatch),
  };
};

// Validate types
DoctorEdit.propTypes = { 
  actionsDoctor: PropTypes.object.isRequired,
  actionsReport: PropTypes.object.isRequired,
  actionsPatient: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    doctor: state.DoctorEditReducer.doctor,
    listPatient: state.DoctorEditReducer.listPatient,
    listReport: state.DoctorEditReducer.listReport
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoctorEdit);
