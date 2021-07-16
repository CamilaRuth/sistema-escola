const {
    Area,
    Sequelize
} = require('../database/models');
const Op = require('sequelize').Op;

const areaController = {
    index: async (req, res) => {
        //console.log('entrou no controller');
        const areas = await Area.findAll({
            include: ['cursos'],
            order: [
                ['tipo', 'ASC']
            ]
        });

        return res.json(areas);

    },

    create: async (req, res) => {
        const {
            tipo
        } = req.body;

        const areas = await Area.create({
            tipo

        });

        return res.json(areas);
    },

    update: async (req, res) => {
        const {
            tipo

        } = req.body;
        const {
            id
        } = req.params;

        const areas = await Area.update({
            tipo

        }, {
            where: {
                id
            }
        });

        return res.json(areas);

    },

    destroy: async (req, res) => {
        const {
            id
        } = req.params;

        const areas = await Area.destroy({
            where: {
                id
            }
        });

        return res.json(areas);
    }


};

module.exports = areaController;