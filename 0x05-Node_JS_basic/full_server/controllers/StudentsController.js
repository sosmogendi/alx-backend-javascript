import { readDatabase } from '../utils.js';

export class StudentsController {
  static getAllStudents(req, res) {
    const filePath = req.query.database;
    readDatabase(filePath)
      .then((fields) => {
        let response = 'This is the list of our students\n';
        Object.keys(fields)
          .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
          .forEach((field) => {
            const studentNames = fields[field].join(', ');
            response += `Number of students in ${field}: ${fields[field].length}. List: ${studentNames}\n`;
          });
        res.status(200).send(response);
      })
      .catch((error) => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    const filePath = req.query.database;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(filePath)
      .then((fields) => {
        const studentNames = fields[major] ? fields[major].join(', ') : '';
        res.status(200).send(`List: ${studentNames}`);
      })
      .catch((error) => {
        res.status(500).send('Cannot load the database');
      });
  }
}
