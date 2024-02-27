import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

function controllerRouting(expressApp) {
  const router = express.Router();
  expressApp.use('/', router);

  router.get('/', (req, res) => {
    AppController.getHomepage(req, res);
  });

  router.get('/students', (req, res) => {
    const databasePath = process.argv[2];
    StudentsController.getAllStudents(req, res, databasePath);
  });

  router.get('/students/:major', (req, res) => {
    const databasePath = process.argv[2];
    StudentsController.getAllStudentsByMajor(req, res, databasePath);
  });
}

export default controllerRouting;
