import React from 'react';

const MintNFT = () => {
    const handleMintNFT = async () =>{
        try{
            //Call mint function
            // const nftId = await wagmiMINTNFT()

        } catch (err) {
            console.error('error minting', err)
        }
    };

    return (
        <div>
            <button onClick={handleMintNFT}> Mint NFT</button>
        </div>
    )
}

export default MintNFT;