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
                    msg: "Le nom doit avoir un nombre de caractères compris entre 2 et 50.",
                    args: [2, 10]
                }
            },
        },
        // custom validator : au moins un des 3 prix doit être renseigné par le client
        price: {
            type: DataTypes.JSON,
            // customValidator(value) {
            //     if (value === null && this.age !== 10) {
            //         throw new Error("name can't be null unless age is 10");
            //     }
            // }
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
