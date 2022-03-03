import { ChainId } from '../enums/ChainId'

export const INIT_CODE_HASH: { [chainId: number]: string } = {
  [ChainId.EVMOS]: '0x710d26eb1d3efc750cc3d1f9622c41afc63c87ddd976fb546998b2decd05d768',
  [ChainId.RINKEBY]: '0x710d26eb1d3efc750cc3d1f9622c41afc63c87ddd976fb546998b2decd05d768',
  [ChainId.EVMOS_TESTNET]: '0x710d26eb1d3efc750cc3d1f9622c41afc63c87ddd976fb546998b2decd05d768',
}
