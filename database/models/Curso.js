module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define(
        "Curso", {
            "id": {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false

            },
            "nome": {
                type: DataTypes.STRING,
                allowNull: false,
            },
            "area_id": {
                type: DataTypes.INTEGER,
                allowNull: false,
                foreignKey: true

            }

        }, {
            "tableName": "cursos",
            "timestamps": true
        }
    );

    Curso.associate = (models) => {
        Curso.belongsTo(models.Area, {
            as: 'area',
            foreignKey: 'area_id'

        });

        Curso.hasMany(models.Turma, {
            as: 'turmas',
            foreignKey: 'curso_id'
        });
    }

    return Curso;

}