// function deployFund() {
//     console.log("Hi")
// }

const { network } = require("hardhat")
const { networkConfig } = require("../helper-hardhat-config")

// module.exports.default = deployFund
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments

    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    console.log(`chain id ${chainId}`)
    const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [ethUsdPriceFeedAddress],
        log: true
    })
}
