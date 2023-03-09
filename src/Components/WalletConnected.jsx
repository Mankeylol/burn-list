import { useWallet, } from "@solana/wallet-adapter-react";
import Card from './Card';
import data from '../data'





export default function WalletConnected() {

  const { connected, publicKey } = useWallet();

const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: 'Bearer f9322af6-68dd-4cce-a894-76bf23a0a005'
    },
    body: JSON.stringify({ownerAccount: publicKey })
  };
  
  fetch('https://rest-api.hellomoon.io/v0/nft/mints-by-owner', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

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
        <button className="burn-btn" onClick={options}>Burn and claim rent</button>
      </div>
    )
  }

  return (
    <>
      {connected && <MyModal />}
    </>
  )
}
