
import './App.css';
import Navbar from './Components/Navbar';
import React from 'react';
import WalletNotConnected from './Components/WalletNotConnected';
import * as Web3 from "@solana/web3.js"
import { WalletContext } from '@solana/wallet-adapter-react';

function App() {

  return (
    <>
      <div className='container'>
        <Navbar/>
        <WalletNotConnected/>
      </div>
    </>
  );
}

export default App;
