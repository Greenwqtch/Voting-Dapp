let Election = artifacts.require("./Election.sol");




module.exports = function(deployer) {
	deployer.deploy(Election);
}
