import {
    Metaplex
  } from "@metaplex-foundation/js";
  import {
    Connection,
    clusterApiUrl,
    PublicKey,
  } from "@solana/web3.js";
  import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
  import PromisePool from "@supercharge/promise-pool/dist";
  
  import { useState, useEffect } from "react";
  import React from "react";
  import Card from "./Card";
  import { v4 } from "uuid";
import BurnNFTs from "./BurnNFTs";
  
  export default function NFTList(props) {
    const [nfts, setNfts] = useState([]);
    const [mintAddress, setMintAddress] = useState([])
  
    useEffect(() => {
        async function nft_Array_Sort() {
          const connection = new Connection(clusterApiUrl("devnet"));
          const metaplex = new Metaplex(connection);

          const wallet = props.publicKey.toBase58();


          const solana_connection = new Connection(
            "https://api.devnet.solana.com"
            // "https://special-responsive-dinghy.solana-mainnet.discover.quiknode.pro/5158345c25d3630b3f69ba4d4b524822351941b1/"
          );

          const filters = [
            {
              //limiting the size to 165 - filtering
              dataSize: 165,
            },

            {
              //memory comparison - in 165 bytes at byte 32 we start(wallets start at 32nd place)
              memcmp: {
                offset: 32,
                bytes: wallet,
              },
            },
          ];

          const tokenAccounts = await solana_connection.getParsedProgramAccounts(TOKEN_PROGRAM_ID, {
            filters,
          });
          console.log(tokenAccounts)

          const unsafe_nft_array = [];
          const safe_nft_array = [];

          const re = /(https?:\/\/|www\.)[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+([/?#]\S*)?/g;

          const account_reducer = (
            acc,
            accB
          ) => {
            if (Buffer.isBuffer(accB.account.data)) {
              return acc;
            }
            if (accB.account.data && accB.account.data.parsed.info.mint) {
              const newMintAddress = accB.account.data.parsed.info.mint;
              if (newMintAddress) {
                acc.push(new PublicKey(newMintAddress));
                console.log(newMintAddress)
              }
            }
            setMintAddress(acc)
            return acc;
          };
          

          const nft_accounts = tokenAccounts.reduce(account_reducer, []);

          await PromisePool.for(nft_accounts)
            .withConcurrency(10)
            .process(async (mintAddress) => {
              let nft = await metaplex.nfts().findByMint({ mintAddress });
              if (nft?.json?.description && re.test(nft.json.description)) {
                unsafe_nft_array.push(nft);
              } else {
                safe_nft_array.push(nft);
              }
            });

          console.log(unsafe_nft_array);
          console.log(safe_nft_array);
          setNfts(unsafe_nft_array)
        }
        nft_Array_Sort();
    }, [props.publicKey]);

    console.log(nfts)

    const cards = nfts.map(item =>{
      return (
        <Card 
          image ={item.json.image}
          name = {item.json.name}
          key = {v4()} 
        />
      )
    })
  
    return (
      <>
      <div className="nft-container">
        {cards}
        </div>
        <BurnNFTs data = {nfts} mintAddress = {mintAddress}/>
      </>
    );
  }