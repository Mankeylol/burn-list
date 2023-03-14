import NFTList from "./GetData";
import { useWallet } from '@solana/wallet-adapter-react';


export default function WalletConnected({ props }) {
  const { publicKey } = useWallet();

  const MyModal = () =>{
    return(
      <div className='modal-content' >
        <h2 className ="content-heading">Possible Scam NFTs</h2>
        <div className="">
        <NFTList publicKey={publicKey} />
        </div>
      </div>
    )
  }

  return (
    <>
      <MyModal />
    </>
  )
}
