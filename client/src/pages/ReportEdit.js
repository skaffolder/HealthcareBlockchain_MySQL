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
import { DateTimePicker } from "material-ui-pickers";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// Custom Actions


// START IMPORT ACTIONS
import ReportActions from "../redux/actions/ReportActions";
import DoctorActions from "../redux/actions/DoctorActions";

// END IMPORT ACTIONS

/** APIs

* actionsReport.create
*	@description CRUD ACTION create
*
* actionsReport.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsDoctor.list
*	@description CRUD ACTION list
*
* actionsReport.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*

**/

class ReportEdit extends Component {
  // Init report
  constructor(props) {
    super(props);
    this.state = {
      report: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsReport.loadReport(this.props.match.params.id);
    }
    
    this.props.actionsDoctor.loadDoctorList();
  }

  // Insert props report in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      report: props.report
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.report._id) {
      this.props.actionsReport.saveReport(this.state.report).then(data => {
        this.props.history.push("/reports/");
      });
    } else {
      this.props.actionsReport.createReport(this.state.report).then(data => {
        this.props.history.push("/reports/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Report Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          <DateTimePicker
            id="date"
            label="Date"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.report.date
                ? new Date(this.state.report.date)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "report", "date")}
            fullWidth
            autoOk
            disableFuture
          />
          
          <FormControl fullWidth>
            <InputLabel shrink htmlFor="type">
              Type
            </InputLabel>
            <Select
              value={this.state.report.type || ""}
              onChange={Utils.handleChangeSelect.bind(this, "report")}
              inputProps={{
                id: "type",
                name: "type"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"private"}>private</MenuItem>
              <MenuItem value={"public"}>public</MenuItem>
            </Select>
          </FormControl>
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m doctor with Doctor */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="doctor">
              Doctor
            </InputLabel>
            <Select
              value={this.state.report.doctor || ""}
              onChange={Utils.handleChangeSelect.bind(this, "report")}
              inputProps={{
                id: "doctor",
                name: "doctor"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listDoctor && this.props.listDoctor.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/reports/">Back to list</Link>

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
    actionsReport: bindActionCreators(ReportActions, dispatch),
    actionsDoctor: bindActionCreators(DoctorActions, dispatch),
  };
};

// Validate types
ReportEdit.propTypes = { 
  actionsReport: PropTypes.object.isRequired,
  actionsDoctor: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    report: state.ReportEditReducer.report,
    listDoctor: state.ReportEditReducer.listDoctor
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportEdit);
