module.exports = (sequelize, DataTypes) => {
    const Area = sequelize.define(
        "Area", {
            "id": {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false

            },
            "tipo": {
                type: DataTypes.STRING,
                allowNull: false,
            }

        }, {
            "tableName": "areas",
            "timestamps": true
        }
    );
    Area.associate = (models) => {
        Area.hasMany(models.Curso, {
            as: 'cursos',
            foreignKey: 'area_id'
        });
    }

    return Area;

}