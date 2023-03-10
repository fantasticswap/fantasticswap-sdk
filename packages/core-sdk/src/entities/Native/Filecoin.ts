import { Currency } from '../Currency'
import { NativeCurrency } from '../NativeCurrency'
import { Token } from '../Token'
import { WNATIVE } from '../../constants/tokens'
// import invariant from 'tiny-invariant'

export class Filecoin extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 18, 'FIL', 'filecoin')
  }

  public get wrapped(): Token {
    const wnative = WNATIVE[this.chainId]
    // TODO
    // invariant(!!wnative, 'WRAPPED')
    return wnative
  }

  private static _cache: { [chainId: number]: Filecoin } = {}

  public static onChain(chainId: number): Filecoin {
    return (
      this._cache[chainId] ?? (this._cache[chainId] = new Filecoin(chainId))
    )
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
