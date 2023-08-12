import React,{ useEffect, useState } from 'react'
import { Web3AuthModalPack} from '@safe-global/auth-kit'
import { OpenloginAdapter } from '@web3auth/openlogin-adapter'
import { WALLET_ADAPTERS } from '@web3auth/base'
import {ethers} from 'ethers';
import Navbar from '../components/Navbar';

function RegisterUserCode() {

    const [web3AuthModalPack, setWeb3AuthModalPack] = useState();
    const [userData, setUserData] = useState({
        provider: "",
        address: "",
        signer: "",
        balance: "",
        profileImg: "",
        name: "",
        email: "",
      });

    useEffect(() => {
    ;(async () => {
        const options = {
                clientId: 'BH7EeJsUOaMe4gCbX3AHEV51Lt-eOuX3ZgB6Vqx8DKrN_XQN3o8O7o3lvJfHo77XaR93cH5qPXTKxyUDFU7xFXM',
                web3AuthNetwork: 'testnet',
                chainConfig: {
                    chainNamespace: "eip155",
                    chainId: "0x5",
                    rpcTarget: `https://rpc.ankr.com/eth_goerli`,
                },
                uiConfig: {
                    theme: 'dark',
                    loginMethodsOrder: ['google', 'facebook']
                }
        }

        const modalConfig = {
            [WALLET_ADAPTERS.TORUS_EVM]: {
            label: 'torus',
            showOnModal: false
        },
            [WALLET_ADAPTERS.METAMASK]: {
            label: 'metamask',
            showOnDesktop: true,
            showOnMobile: false
        }
    }

    const openloginAdapter = new OpenloginAdapter({
        loginSettings: {
        mfaLevel: 'mandatory'
    },
    adapterSettings: {
        uxMode: 'popup',
        whiteLabel: {
            name: 'Safe'
        }
    }
    })

    const web3AuthConfig = {
        txServiceUrl: 'https://safe-transaction-goerli.safe.global'
    }
        const web3AuthModalPack = new Web3AuthModalPack(web3AuthConfig)
        await web3AuthModalPack.init({ options, adapters: [openloginAdapter], modalConfig })

        setWeb3AuthModalPack(web3AuthModalPack)
    })()
}, [])

    const login = async () => {
        try{
        console.log("Hello");
        
        const userAddress = await web3AuthModalPack.signIn()
        console.log('SIGN IN RESPONSE: ', userAddress)

        const userInfo = await web3AuthModalPack.getUserInfo()
        console.log('USER INFO: ', userInfo)

        const provider = new ethers.providers.Web3Provider(
            web3AuthModalPack.getProvider()
          );
          const balance = await provider.getBalance(userAddress.eoa);
          console.log("Balance",balance);

          setUserData({
            ...userData,
            address: userAddress,
            provider: provider,
            signer: provider.getSigner(),
            balance: parseInt(balance) / Math.pow(10, 18),
            profileImg: userInfo.profileImage,
            email: userInfo.email,
            name: userInfo.name,
          });        
        }
        catch(err){
            console.log(err);
        }
    };

    const logout = async () => {
        try{
        
        const signOutInfo = await web3AuthModalPack.signOut();
        setUserData({
            provider: "",
            address: "",
            signer: "",
            balance: "",
            profileImg: "",
            name: "",
            email: "",
          });
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <Navbar login={login} userData={userData} logout={logout} />
  )
}

export default RegisterUserCode