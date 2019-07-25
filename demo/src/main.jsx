import React from 'react';
import StudentsList from './students/students-list';
import StudentToAdd from './students/student-add';

export default () => (
  <React.Fragment>
    <StudentToAdd />
    <StudentsList />
  </React.Fragment>
);
