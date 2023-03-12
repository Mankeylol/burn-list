import { useWallet } from "@solana/wallet-adapter-react";
import WalletConnected from "./WalletConnected";
import WalletNotConnected from "./WalletNotConnected";

export const MainContainer = () => {
    const { connected, publicKey } = useWallet();
    return (
      connected ? <WalletConnected /> : <WalletNotConnected />
    )
}