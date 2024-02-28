import React from 'react';
import { NFT_ABI } from '@/data/nfts';

import { useWriteContract, useReadContract} from 'wagmi';
import Image from 'next/image';

const MintNFT = () => {
    const { writeContract } = useWriteContract();
    try{
        //Call mint function
        // const nftId = await wagmiMINTNFT()
         writeContract({
            abi:NFT_ABI,
            address:'',
            functionNAme:'mint',
            args: [
                'sero',
                'link',
                'image',
                'address'
            ]
        })
    } catch (err) {
        console.error('error minting', err)
    }
    ;

    return (
        <div>
            <button onClick={handleMintNFT}> Mint NFT</button>
        </div>
    )

};
export default MintNFT;