module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("users", {
    title: {
    type: Sequelize.STRING
    },
    description: {
    type: Sequelize.STRING
    },
    published: {
    type: Sequelize.BOOLEAN
}
});
return Tutorial;
};