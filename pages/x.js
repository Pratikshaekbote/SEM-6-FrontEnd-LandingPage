import React from 'react';
import { retrieveNFT } from '../utils/retrieveNFT';
import { contract } from '../utils/contract';
import { getMetadataURL } from '../utils/mintNFT';
import { MintNFT } from '../utils/mintNFT';
import Data from '../utils/Data';
import {VerifyData} from '../utils/verifyData';


const x = () => {
  return (
    <div>
      <button  onClick={() => retrieveNFT()}>RETRIVE</button><br />
      <button  onClick={() => contract()}>CONTRACT</button><br />
      <button  onClick={() => getMetadataURL()}>getmetadataURL</button><br />
    
      <button  onClick={() => MintNFT()}>MINT</button> <br />
      <button  onClick={() => VerifyData('Ayush',1233,1234,20)}>VerifyData</button> <br />

<Data/>

    </div>
  );
}

export default x;