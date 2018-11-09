'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    company_name: DataTypes.STRING,
    company_address: DataTypes.STRING,
    company_city: DataTypes.STRING
  }, {});
  Company.associate = function(models) {
    // associations can be defined here
  };
  return Company;
};