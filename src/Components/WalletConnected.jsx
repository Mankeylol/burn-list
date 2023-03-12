import Card from './Card';
import data from '../data'
import NFTList from "./GetData";
import { useWallet } from '@solana/wallet-adapter-react';
import { v4 } from "uuid";

export default function WalletConnected({ props }) {
  const { publicKey } = useWallet();
  const cards = data.map(item =>{
    return (
      <Card 
        image ={item.img}
        name = {item.name}
        key = {v4()} 
      />
    )
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
      <MyModal />
      <NFTList publicKey={publicKey} />
    </>
  )
}
