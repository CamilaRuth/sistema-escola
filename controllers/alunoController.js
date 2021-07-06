const {
    Aluno
} = require('../database/models/Aluno');

const alunoController = {
    index: async (req, res) => {
        console.log('entrou no controller');
        const alunos = await Aluno.findAll();

        return res.json(alunos);

    }

};

module.exports = alunoController;