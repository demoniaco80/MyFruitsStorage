module.exports = ( sequelize , Sequelize ) => {
    const Fruit = sequelize.define ("fruits",{
        name : {
        type : Sequelize.STRING
        },
        type : {
         type : Sequelize.STRING
        },
        quantity : {
        type : Sequelize.INTEGER
        }
    });
    return Fruit ;} ;