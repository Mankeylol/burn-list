import NFTList from "./GetData";
import { useWallet } from '@solana/wallet-adapter-react';
import BurnNFTs from "./BurnNFTs";

export default function WalletConnected({ props }) {
  const { publicKey } = useWallet();

  const MyModal = () =>{
    return(
      <div className='modal-content' >
        <h2 className ="content-heading">Possible Scam NFTs</h2>
        <NFTList publicKey={publicKey} />
        <button className="burn-btn" onClick={BurnNFTs}>Burn and claim rent</button>
      </div>
    )
  }

  return (
    <>
      <MyModal />

    </>
  )
}
