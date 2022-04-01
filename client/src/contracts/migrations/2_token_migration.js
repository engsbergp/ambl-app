const AmblToken = artifacts.require("AmblToken");

module.exports = function (deployer) {
  deployer.deploy(AmblToken);
};
