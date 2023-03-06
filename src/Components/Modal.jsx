import React, { useState } from 'react'
import { useWallet } from "@solana/wallet-adapter-react";

export default function Modal() {

  const [popup, setState] = useState(false);
  console.log(popup)

  const data = useWallet();

  /*if (data.connected = true) {
    setState(true)
  }*/
  
  console.log("wallet", data);

  const MyModal = () =>{
    return(
      <div className='modal-content' >
      </div>
    )
  }

  return (
    <>
      {popup && <MyModal />}
    </>
  )
}
