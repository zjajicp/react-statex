import React from 'react';
import { connect } from '../../../index';

class StudentAdd extends React.Component {
  handleOnChange(evt) {
    console.log(evt.target.value);
    this.props.actions.changeStudentToAdd(evt.target.value);
  }

  render() {
    console.log(this);
    const { props } = this;
    return (
      <React.Fragment>
        <input
          onChange={this.handleOnChange.bind(this)}
          value={props.studentToAdd}
          placeholder="student name"
        />
        <button onClick={props.actions.addStudent}>Add</button>
      </React.Fragment>
    );
  }
}

export default connect({
  stateToProps: ({ students }) => ({
    studentToAdd: students.studentToAdd
  }),
  actionsToProps: ({ students }) => ({
    changeStudentToAdd: students.changeStudentToAdd,
    addStudent: students.addStudent
  })
})(StudentAdd);
