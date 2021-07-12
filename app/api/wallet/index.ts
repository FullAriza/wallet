import { Network } from '@defichain/jellyfish-network'
import { JellyfishWallet, WalletHdNode } from '@defichain/jellyfish-wallet'
import { WhaleWalletAccount, WhaleWalletAccountProvider } from '@defichain/whale-api-wallet'
import { Mnemonic } from './mnemonic'
import { WalletData, WalletType } from './persistence'

export type Wallet = JellyfishWallet<WhaleWalletAccount, WalletHdNode>

export function createWallet (data: WalletData, options: Network, accountProvider: WhaleWalletAccountProvider): Wallet {
  switch (data.type) {
    case WalletType.MNEMONIC_UNPROTECTED:
      return new JellyfishWallet(Mnemonic.createProvider(data, options), accountProvider)

    default:
      throw new Error(`wallet ${data.type as string} not available`)
  }
}