import { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Metaplex,keypairIdentity, bundlrStorage } from "@metaplex-foundation/js";
import * as web3 from "@solana/web3.js";

export function NFTList() {
  const { publicKey } = useWallet();
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    if (publicKey) {
      const connection = new web3.Connection(web3.clusterApiUrl("devnet"), "confirmed");
      const mintAddress = new web3.PublicKey(publicKey.toBase58());
      console.log(mintAddress)
      const metaplex = Metaplex.make(connection)
    .use(keypairIdentity(mintAddress))
    .use(bundlrStorage());

      const fetchNfts = async () => {
        try {
          const nftData =  await metaplex.nfts().findAllByOwner({
            owner: mintAddress
        });
          console.log(nftData)
          const nftMetadata = await Promise.all(
            nftData.map(async (account) => {
              return await metaplex.load(connection, account.pubkey);
            })
          );console.log(nftMetadata)
          setNfts(nftMetadata);
        } catch (error) {
          console.error(error);
        }
      };
      fetchNfts();
    }
  }, [publicKey]);

  return (
    <div>
      <h1>Your NFTs</h1>
      <ul>
        {nfts.map((nft) => (
          <li key={nft.pubkey.toBase58()}>{nft.data.name}</li>
        ))}
      </ul>
    </div>
  );
}
