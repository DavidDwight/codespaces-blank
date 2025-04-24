'use client';
import { NFTMintCard } from '@coinbase/onchainkit/nft';
import { NFTMedia } from '@coinbase/onchainkit/nft/view';
import {
  NFTCreator,
  NFTCollectionTitle,
  NFTQuantitySelector,
  NFTAssetCost,
  NFTMintButton,
} from '@coinbase/onchainkit/nft/mint';
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownLink,
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance,
} from '@coinbase/onchainkit/identity';

export default function App() {
  return (
    <div
      className="flex flex-col min-h-screen font-sans text-white"
      style={{
        backgroundImage:
          "url('https://cdna.artstation.com/p/assets/images/images/042/734/354/original/kevin-manguera-axie-sample-fa.gif?1635302189')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-black bg-opacity-60 backdrop-blur-sm min-h-screen">
        <header className="pt-4 pr-4">
          <div className="flex justify-end">
            <div className="wallet-container">
              <Wallet>
                <ConnectWallet>
                  <Avatar className="h-6 w-6" />
                  <Name />
                </ConnectWallet>
                <WalletDropdown>
                  <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                    <Avatar />
                    <Name />
                    <Address />
                    <EthBalance />
                  </Identity>
                  <WalletDropdownLink
                    icon="wallet"
                    href="https://keys.coinbase.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wallet
                  </WalletDropdownLink>
                  <WalletDropdownDisconnect />
                </WalletDropdown>
              </Wallet>
            </div>
          </div>
        </header>
        <main className="flex-grow flex items-center justify-center">
          <div className="max-w-4xl w-full p-4">
            <section className="flex justify-center mb-10">
              <NFTMintCard contractAddress="0x5E460559B2d57373a5D03CC096FaFFd021CE39F7">
                <NFTCreator />
                <NFTMedia />
                <NFTCollectionTitle />
                <NFTQuantitySelector />
                <NFTAssetCost />
                <NFTMintButton />
              </NFTMintCard>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
