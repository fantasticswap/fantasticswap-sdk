import { ChainId } from '../enums'
import { ChainKey } from '../enums'

export const CHAIN_KEY: { [chainId: number]: ChainKey } = {
  [ChainId.ETHEREUM]: ChainKey.ETHEREUM,
  [ChainId.ROPSTEN]: ChainKey.ROPSTEN,
  [ChainId.RINKEBY]: ChainKey.RINKEBY,
  [ChainId.GÖRLI]: ChainKey.GÖRLI,
  [ChainId.KOVAN]: ChainKey.KOVAN,
  [ChainId.MATIC]: ChainKey.MATIC,
  [ChainId.MATIC_TESTNET]: ChainKey.MATIC_TESTNET,
  [ChainId.FANTOM]: ChainKey.FANTOM,
  [ChainId.FANTOM_TESTNET]: ChainKey.FANTOM_TESTNET,
  [ChainId.XDAI]: ChainKey.XDAI,
  [ChainId.BSC]: ChainKey.BSC,
  [ChainId.BSC_TESTNET]: ChainKey.BSC_TESTNET,
  [ChainId.ARBITRUM]: ChainKey.ARBITRUM,
  [ChainId.ARBITRUM_TESTNET]: ChainKey.ARBITRUM_TESTNET,
  [ChainId.MOONBEAM_TESTNET]: ChainKey.MOONBEAM_TESTNET,
  [ChainId.AVALANCHE]: ChainKey.AVALANCHE,
  [ChainId.AVALANCHE_TESTNET]: ChainKey.AVALANCHE_TESTNET,
  [ChainId.HECO]: ChainKey.HECO,
  [ChainId.HECO_TESTNET]: ChainKey.HECO_TESTNET,
  [ChainId.HARMONY]: ChainKey.HARMONY,
  [ChainId.HARMONY_TESTNET]: ChainKey.HARMONY_TESTNET,
  [ChainId.OKEX]: ChainKey.OKEX,
  [ChainId.OKEX_TESTNET]: ChainKey.OKEX_TESTNET,
  [ChainId.CELO]: ChainKey.CELO,
  [ChainId.PALM]: ChainKey.PALM,
  [ChainId.PALM_TESTNET]: ChainKey.PALM_TESTNET,
  [ChainId.MOONRIVER]: ChainKey.MOONRIVER,
  [ChainId.FUSE]: ChainKey.FUSE,
  [ChainId.TELOS]: ChainKey.TELOS,
  [ChainId.EVMOS]: ChainKey.EVMOS,
  [ChainId.EVMOS_TESTNET]: ChainKey.EVMOS_TESTNET,
  [ChainId.HYPERSPACE]: ChainKey.HYPERSPACE,

  // Just for test
  [ChainId.HARDHAT]: ChainKey.HARDHAT,
}
