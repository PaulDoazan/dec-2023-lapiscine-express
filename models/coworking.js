// on définit le model coworking qui se traduira par une table avec ses champs dans la BDD
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Coworking', {
        // Model attributes are defined here
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: "Le nom est déjà pris."
            },
            validate: {
                len: {
                    msg: "Le nom doit avoir au moins 2 caractères.",
                    args: [2]
                }
            },
        },
        price: {
            type: DataTypes.JSON
        },
        address: {
            type: DataTypes.JSON
        },
        superficy: {
            type: DataTypes.INTEGER,
            validate: {
                isInt: {
                    msg: "La superficie doit être un entier."
                }
            }
        },
        capacity: {
            type: DataTypes.INTEGER,
            validate: {
                isInt: {
                    msg: "La superficie doit être un entier."
                }
            }
        }
    }
    );
}
