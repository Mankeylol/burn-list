import "./App.css";
import Navbar from "./Components/Navbar";
import { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { clusterApiUrl } from "@solana/web3.js";
import {
  WalletModalProvider
} from "@solana/wallet-adapter-react-ui";
import { MainContainer } from "./Components/MainContainer";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

// You can also provide a custom RPC endpoint.

const network = WalletAdapterNetwork.Devnet;

function App() {
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    [network]
  );

  return (
    <>
      <div className='container'>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} /*autoConnect*/>
            <WalletModalProvider>
              <Navbar />
              <MainContainer />
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </div>
    </>
  );
}

export default App;
