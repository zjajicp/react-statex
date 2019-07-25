import { asyncAction } from '../../../lib';

const getStudents = () => ({ setState }) =>
  // simulating async request
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'James Bond'
        },
        {
          id: 2,
          name: 'Nikola Tesla'
        }
      ]);
    }, 2000);
  }).then(students => {
    setState({
      list: students
    });
  });
export default {
  state: {
    list: [],
    loading: false,
    error: undefined,
    studentToAdd: ''
  },
  actions: {
    removeStudent: studentId => ({ setState, getState }) => {
      const { students } = getState();
      setState({
        list: students.list.filter(student => student.id !== studentId)
      });
    },
    getStudents: asyncAction(getStudents),
    changeStudentToAdd: value => ({ setState }) => {
      setState({
        studentToAdd: value
      });
    },
    addStudent: () => ({ setState }) => {
      setState(students => ({
        list: students.list.concat({
          id: students.list.length
            ? students.list[students.list.length - 1].id + 1
            : 1,
          name: students.studentToAdd
        }),
        studentToAdd: ''
      }));
    }
  }
};
