import React, { useState } from 'react'
import Solana from "@solana/web3.js"

export default function MainPopup() {

  const [popup, setPopup] = useState(false);
  const toggleModal = () => {
    setPopup(!popup)
  }


  return (
    <div className=''>
      
    </div>
  )
}
