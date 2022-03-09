import { ChainId } from '../enums/ChainId'

export const INIT_CODE_HASH: { [chainId: number]: string } = {
  [ChainId.EVMOS]: '0xf4143956db9966f38b4e9578159e703449ce2ecd76de2ce06fbe5a30aabbed40',
  [ChainId.EVMOS_TESTNET]: '0xf4143956db9966f38b4e9578159e703449ce2ecd76de2ce06fbe5a30aabbed40',
  [ChainId.RINKEBY]: '0xf4143956db9966f38b4e9578159e703449ce2ecd76de2ce06fbe5a30aabbed40',
}
