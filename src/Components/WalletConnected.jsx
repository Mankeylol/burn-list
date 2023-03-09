import { useWallet } from "@solana/wallet-adapter-react";
import { Metaplex } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl,} from "@solana/web3.js";

import Card from './Card';
import data from '../data'




export default function WalletConnected() {

  const { connected, publicKey } = useWallet();



  const cards = data.map(item =>{
    return (<Card 
      image ={item.img}
      name = {item.name}/>)
  })


  const MyModal = () =>{
    return(
      <div className='modal-content' >
        <h2 className ="content-heading">Possible Scam NFTs</h2>
        <div className="nft-container">
        {cards}
        </div>
        <button className="burn-btn">Burn and claim rent</button>
      </div>
    )
  }

  return (
    <>
      {connected && <MyModal />}
    </>
  )
}
