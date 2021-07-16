const {
    Curso,
    Sequelize
} = require('../database/models');
const Op = require('sequelize').Op;

const cursoController = {
    index: async (req, res) => {
        //console.log('entrou no controller');
        const cursos = await Curso.findAll({
            include: ['turmas', 'area'],
            order: [
                [
                    'nome', 'ASC'
                ]
            ]
        });

        return res.json(cursos);

    },

};

module.exports = cursoController;