module.exports = (sequelize, DataTypes) => {
    const BolsaEstudos = sequelize.define(
        "BolsaEstudos", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: true,
                autoIncrement: true
            },

            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },

            porcentagem_desconto: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            patrocinador: {
                type: DataTypes.STRING,
                allowNull: false
            },

            max_aplicacoes: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            status: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaulValue: 1
            }

        }, {
            tableName: "bolsa_estudos",
            timestamps: true
        }
    );

    return BolsaEstudos;
}