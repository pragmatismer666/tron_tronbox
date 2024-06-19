module.exports = {
  networks: {
    mainnet: {
      // Don't put your private key here:
      privateKey: "44736903d69fa5fa2550e363d662952824164d9423ab8e90418df6d05a21d891",
      userFeePercentage: 100,
      feeLimit: 1000 * 1e6,
      fullHost: 'https://api.trongrid.io',
      network_id: '1'
    },
    nile: {
      privateKey: "44736903d69fa5fa2550e363d662952824164d9423ab8e90418df6d05a21d891",
      userFeePercentage: 100,
      feeLimit: 1000 * 1e6,
      fullHost: 'https://nile.trongrid.io',
      network_id: '3'
    },
    compilers: {
      solc: {
        version: '0.8.0'
      }
    }
  },
  // solc compiler optimize
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    },
  }
}
