module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
    Username: {
    type: Sequelize.STRING
    },
    Password: {
    type: Sequelize.STRING
    }
});
return User;
};