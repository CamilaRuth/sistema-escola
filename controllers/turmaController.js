const {
    Turma,
    Sequelize
} = require('../database/models');
const Op = require('sequelize').Op;

const turmaController = {
    index: async (req, res) => {
        //console.log('entrou no controller');
        const turmas = await Turma.findAll({
            include: ['curso', 'professor', 'alunos'],
            order: [
                [
                    'ano_inicio', 'ASC'
                ]
            ]
        });

        return res.json(turmas);

    },
}


module.exports = turmaController;