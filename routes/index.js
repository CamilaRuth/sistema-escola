var express = require('express');
const alunoController = require('../controllers/alunoController');
const professorController = require('../controllers/professorController');
const turmaController = require('../controllers/turmaController');
const areaController = require('../controllers/areaController');
const cursoController = require('../controllers/cursoController');
const indexController = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/alunos', alunoController.index);
router.get('/alunos/matricula/:ano', alunoController.filtroAnoMatricula);
router.get('/alunos/nome/:nome', alunoController.filtroNome);

router.get('/professores', professorController.index);
router.post('/professores', professorController.create);
router.put('/professores/:id', professorController.update);
router.delete('/professores/:id', professorController.destroy);

router.get('/turma', turmaController.index);
router.get('/curso', cursoController.index);


router.get('/dashboard', indexController.index);
router.get('/alunos/novo', indexController.novo);
router.post('alunos/novo', indexController.create);
router.get('/alunos/:id', indexController.editarAluno);
router.post('/alunos/:id', indexController.atualizarAluno);


router.get('/area', areaController.index);
router.post('/area', areaController.create);
router.put('/area/:id', areaController.update);
router.delete('/area/:id', areaController.destroy);

module.exports = router;