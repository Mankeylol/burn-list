import { useWallet } from "@solana/wallet-adapter-react";
import React from "react";
import { Wallet } from "./WalletAdapter";

export default function Navbar() {
  const { publicKey } = useWallet();

  console.log("wallet", publicKey);
  return (
    <nav className='navbar'>
      <h1 className='hero-text'>The Burn List</h1>
      <div className='wallet-container'>
        <Wallet />
      </div>
    </nav>
  );
}
