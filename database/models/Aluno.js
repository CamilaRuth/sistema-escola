module.exports = (sequelize, DataTypes) => {
    const Aluno = sequelize.define(
        "Aluno", {
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
            "sobrenome": {
                type: DataTypes.STRING,
                allowNull: false
            },
            "ano_matricula": {
                type: DataTypes.INTEGER,
                allowNull: false
            },

        }, {
            "tableName": "alunos",
            "timestamps": true
        }
    );

    Aluno.associate = (models) => {
        Aluno.belongsToMany(models.Turma, {
            as: 'turmas',
            through: 'alunos_has_turmas',
            foreignKey: 'aluno_id',
            otherKey: 'turma_id',
            timestamps: true
        });
    }


    return Aluno;

}