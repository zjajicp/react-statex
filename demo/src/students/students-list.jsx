import React from 'react';
import { connect } from '../../../index';

class StudentsList extends React.Component {
  componentDidMount() {
    this.props.actions.getStudents(2);
  }

  handleStudentRemove(student) {
    this.props.actions.removeStudent(student.id);
  }

  handleStudentChange(evt) {
    this.props.actions.changeStudentToAdd(evt.target.value);
  }

  handleStudentAdd() {
    this.props.actions.addStudent();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.studentsLoading ? (
          <div>Loading...</div>
        ) : (
          this.props.students.map(student => (
            <div key={student.id}>
              {student.name}
              <button
                onClick={() => this.handleStudentRemove(student)}
                style={{
                  margin: '8px'
                }}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </React.Fragment>
    );
  }
}

export default connect({
  stateToProps: state => ({
    students: state.students.list,
    studentsLoading: state.students.loading
  }),
  actionsToProps: actions => ({
    getStudents: actions.students.getStudents,
    removeStudent: actions.students.removeStudent
  })
})(StudentsList);
