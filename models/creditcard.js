'use strict';
module.exports = (sequelize, DataTypes) => {
  const CreditCard = sequelize.define('CreditCard', {
    cardname: DataTypes.STRING,
    cardnbr: DataTypes.STRING,
    expired_date: DataTypes.STRING
  }, {});
  CreditCard.associate = function(models) {
    // associations can be defined here
  };
  return CreditCard;
};