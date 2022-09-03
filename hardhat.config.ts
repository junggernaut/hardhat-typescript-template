import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-ethers";
import "hardhat-gas-reporter";
import "dotenv/config";
import "solidity-coverage";

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "";
const RINKEBY_RPC_URL =
	process.env.RINKEBY_RPC_URL ||
	"https://eth-rinkeby.alchemyapi.io/v2/your-api-key";
const KOVAN_RPC_URL =
	process.env.KOVAN_RPC_URL ||
	"https://eth-mainnet.alchemyapi.io/v2/your-api-key";
const PRIVATE_KEY =
	process.env.PRIVATE_KEY ||
	"0x11ee3108a03081fe260ecdc106554d09d9d1209bcafd46942b10e02943effc4a";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";

const config: HardhatUserConfig = {
	defaultNetwork: "hardhat",
	networks: {
		hardhat: {
			chainId: 31337,
			// gasPrice: 130000000000,
		},
		rinkeby: {
			url: RINKEBY_RPC_URL,
			accounts: [PRIVATE_KEY],
			chainId: 4,
		},
		kovan: {
			url: KOVAN_RPC_URL,
			accounts: [PRIVATE_KEY],
			chainId: 42,
		},
	},
	solidity: "0.8.9",
	etherscan: {
		apiKey: ETHERSCAN_API_KEY,
	},
	gasReporter: {
		enabled: true,
		currency: "USD",
		outputFile: "gas-report.txt",
		noColors: true,
		// coinmarketcap: COINMARKETCAP_API_KEY,
	},
	namedAccounts: {
		deployer: {
			default: 0, // here this will by default take the first account as deployer
			1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
		},
	},
};

export default config;
