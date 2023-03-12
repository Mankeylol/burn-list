import { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { useEffect } from "react";


export default function BurnNFTs(props) {
  
  const nftsToBurn = props.data
  console.log(nftsToBurn)
  const publicKey = props.publicKey

  useEffect(()=>{
    async function burnTx(){
      const connection = new Connection(clusterApiUrl("devnet"));
      const metaplex = new Metaplex(connection);
      const wallet = publicKey.toBase58;
      metaplex.use(walletAdapterIdentity(wallet));


      const parameters = {
        mintAddress : nftsToBurn
      }

      await metaplex.nfts().delete(parameters)

    }
  })
    
  return (
    <>
    </>
  );
}