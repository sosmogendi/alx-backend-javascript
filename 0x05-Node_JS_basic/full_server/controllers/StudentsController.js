import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response, databasePath) {
    readDatabase(databasePath)
      .then((studentFields) => {
        const students = [];
        let message;

        students.push('This is the list of our students');

        for (const field of Object.keys(studentFields)) {
          message = `Number of students in ${field}: ${
            studentFields[field].length
          }. List: ${studentFields[field].join(', ')}`;

          students.push(message);
        }
        response.send(`${students.join('\n')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response, databasePath) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(databasePath)
        .then((studentFields) => {
          const students = studentFields[major] || [];

          response.send(`List: ${students.join(', ')}`);
        })
        .catch(() => response.status(500).send('Cannot load the database'));
    }
  }
}

export default StudentsController;
