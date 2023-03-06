import { useWallet } from "@solana/wallet-adapter-react";
import Card from './Card';
import data from '../data'



export default function Modal() {

  const { connected } = useWallet();

  const cards = data.map(item =>{
    return (<Card 
      image ={item.img}
      name = {item.name}/>)
  })


  const MyModal = () =>{
    return(
      <div className='modal-content' >
        <h2>Possible Scam NFTs</h2>
        <div className="nft-container">
        {cards}
        </div>
      </div>
    )
  }

  return (
    <>
      {connected && <MyModal />}
    </>
  )
}
