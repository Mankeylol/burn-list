import React from 'react'
import { Wallet } from './WalletAdapter'
import { useWallet } from "@solana/wallet-adapter-react";

export default function WalletNotConnected() {

  const { connected } = useWallet();

  const LandingPage = () => {
    return (
      <div className='main-content'>
        <h1>Connect wallet</h1>
        <p>Connect your wallet to access The Burn List and remove spam NFTs from your wallet, check out our docs for more info</p>
        <div className='btn-div'>
          <div className='main-btn'><Wallet /></div>
          <button className='side-btn'>Learn more</button>
        </div>
      </div>
)
  }

  return (
    <>
      {!connected &&  <LandingPage/>}
    </>
  )
}
