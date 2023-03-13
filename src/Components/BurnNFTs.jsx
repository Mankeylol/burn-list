import { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { useEffect } from "react";


export default function BurnNFTs(props) {
  
  const publicKey = props.publicKey

  useEffect(()=>{
    const nftsToBurn = props.data
  console.log(nftsToBurn)
  const mintAddresses = []

    for (let i = 0; i < nftsToBurn.length; i++) {

      mintAddresses.push(nftsToBurn[i].mint.address.toBase58())
    }
    console.log(mintAddresses)
  }, [props.data])
  

  useEffect(()=>{
    async function burnTx(){
      const connection = new Connection(clusterApiUrl("devnet"));
      const metaplex = new Metaplex(connection);
      const wallet = publicKey.toBase58;
      metaplex.use(walletAdapterIdentity(wallet));


      const parameters = {
        mintAddress : "HzAyESmG9WpM1RH8rdX7XCAyQPK19Fh4DndhRN5L4S66"
      }

      await metaplex.nfts().delete(parameters)

    }
  })
    
  return (
    <>
    </>
  );
}