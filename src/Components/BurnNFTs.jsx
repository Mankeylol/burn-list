import { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { useEffect, useState } from "react";


export default function BurnNFTs(props) {

  const [mint_address, Set_mint_address] = useState([])
  
  const publicKey = props.publicKey

  useEffect(()=>{
    const nftsToBurn = props.data
    if (nftsToBurn) {
      console.log(nftsToBurn)
  const mintAddresses = []

    for (let i = 0; i < nftsToBurn.length; i++) {

      mintAddresses.push(new PublicKey(nftsToBurn[i].mint.address.toBase58()))
    }
    console.log(mintAddresses)
    Set_mint_address(mintAddresses)
      
    }
  
  }, [props.data])
  
    async function burnTx(){
      const connection = new Connection(clusterApiUrl("devnet"));
      const metaplex = new Metaplex(connection);
      const wallet = new PublicKey(publicKey.toBase58());
      metaplex.use(walletAdapterIdentity(wallet));


      const parameters = {
        mintAddress : mint_address
      }

      await metaplex.nfts().delete(parameters)

    }    
  return (
    <>
    <button className="burn-btn" onClick={()=>burnTx()}>Burn and claim rent </button>
    </>
  );
}