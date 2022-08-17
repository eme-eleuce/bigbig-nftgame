import React, {useEffect, useState} from 'react';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';
import SelectCharacter from './selectCharacter';
import { CONTRACT_ADDRESS, transformCharacterData } from '../constants/cuenta';
import  ABI_FILE  from '../utils/MyEpicGame.json';
import { ethers } from 'ethers';

const Hero = () => {
// quede en la parte de Check your Network!

  const [currentAccount, setCurrentAccount] = useState(null);
  const [characterNFT, setCharacterNFT] = useState(null);

  // Actions
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log('Make sure you have MetaMask!');
        return;
      } else {
        console.log('We have the ethereum object', ethereum);

        const accounts = await ethereum.request({ method: 'eth_accounts' });

        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log('Found an authorized account:', account);
          setCurrentAccount(account);
        } else {
          console.log('No authorized account found');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  /*
   * Implement your connectWallet method here
   */
  const connectWalletAction = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert('Get MetaMask!');
        return;
      }

      /*
       * Fancy method to request access to account.
       */
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      /*
       * Boom! This should print out public address once we authorize Metamask.
       */
      console.log('Connected', accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    /*
     * The function we will call that interacts with our smart contract
     */
    const fetchNFTMetadata = async () => {
      console.log('Checking for Character NFT on address:', currentAccount);
  
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const gameContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        myEpicGame.abi,
        signer
      );
  
      const txn = await gameContract.checkIfUserHasNFT();
      if (txn.name) {
        console.log('User has character NFT');
        setCharacterNFT(transformCharacterData(txn));
      } else {
        console.log('No character NFT found');
      }
    };
  
    /*
     * We only want to run this, if we have a connected wallet
     */
    if (currentAccount) {
      console.log('CurrentAccount:', currentAccount);
      fetchNFTMetadata();
    }
  }, [currentAccount]);

  const checkNetwork = async () => {
    try { 
      if (window.ethereum.networkVersion !== '4') {
        alert("Please connect to Rinkeby!")
      }
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);


  const renderContent = () => {
    /*
     * Scenario #1
     */
    if (!currentAccount) {
      return (
       
          <button 
          onClick={connectWalletAction}
          className='mt-[10rem] text-xl border-dashed border-2 rounded-md p-2'> 
          Connect Wallet To Get Started
          </button>
        
      );
      /*
       * Scenario #2
       */
    } else if (currentAccount && !characterNFT) {
      return <SelectCharacter setcharacternft={setCharacterNFT} />;
    }
  }; 
  return (
    <div className='flex items-center justify-center h-screen bg-cover bg-center bg-fixed bg-radial from-indigo-400 to-black'>
         <div  className='flex top-0 left-0 right-0 bottom-0  z-[2]'/>
         <Spline scene="https://prod.spline.design/OkB6CMp4G95gyggP/scene.splinecode" className='absolute'/>
         <div className='p-5 text-[#E9E9EB] z-[2] md:ml-[1rem] ml-0 mt-[9rem] text-center'>

            <p className='text-3xl lg:text-6xl uppercase  cursor-pointer'>
              
            <Link to='/section' className='p-4'>Defeat the bigbig.</Link>
              </p>
              {renderContent()}
             </div>
    </div>
  )
}

export default Hero;