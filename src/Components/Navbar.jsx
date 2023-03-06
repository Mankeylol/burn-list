import React from "react";
import { Wallet } from "./WalletAdapter";
import { useWallet } from "@solana/wallet-adapter-react";

export default function Navbar() {
  const { publicKey, wallet } = useWallet();

  console.log("wallet", wallet, publicKey);
  return (
    <nav className='navbar'>
      <h1 className='hero-text'>The Burn List</h1>
      <div className='wallet-container'>
        <Wallet />
      </div>
    </nav>
  );
}
