module.exports = (sequelize, DataTypes) => {
    const Turma = sequelize.define(
        "Turma", {
            "id": {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false

            },
            "duracao": {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            "ano_inicio": {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            "semestre": {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            "curso_id": {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            "professor_id": {
                type: DataTypes.INTEGER,
                allowNull: false
            }

        }, {
            "tableName": "turmas",
            "timestamps": true
        }
    );

    Turma.associate = (models) => {
        Turma.belongsTo(models.Curso, {
            as: 'curso',
            foreignKey: 'curso_id'
        });

        Turma.belongsTo = (models.Professor, {
            as: 'professor',
            foreignKey: 'professor_id'
        });

        Turma.belongsToMany(models.Aluno, {
            as: 'alunos',
            through: 'alunos_has_turmas',
            foreignKey: 'turma_id',
            otherKey: 'aluno_id',
            timestamps: true
        });
    }

    return Turma;

}