import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import IssuingAuthorityDashboard from './pages/IssuingAuthorityDashboard';
import AddCertificate from './components/userDashboard/AddCertificate';
import IssueCertificateForm from './components/issuingAuthorityDashboard/IssueCertificateForm';
import RequestCertificate from './components/userDashboard/RequestCertificate';
import LandingPage from './components/LandingPage/LandingPage';
import GetStarted from './components/LandingPage/GetStarted';
import VerificationReq from './components/RegistrationPage/VerificationReq';
import RegistrationUser from './components/RegistrationPage/RegistrationUser';
import CopyAlumni from './components/RegistrationPage/CopyAlumni';
import Navbar from './components/Navbar';
import UserDashboard from './pages/UserDashboard';
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";

import { Web3AuthModalPack} from '@safe-global/auth-kit'
import { OpenloginAdapter } from '@web3auth/openlogin-adapter'
import { WALLET_ADAPTERS } from '@web3auth/base'
import {ethers} from 'ethers';
import React,{ useEffect, useState } from 'react'

function App() {

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

    // useEffect(() => {
    //   // This effect runs whenever myValue changes
    //   console.log('Updated value:', userData);
    // }, [userData]);
      useEffect(() => {
        (async () => {

          const chainConfig ={
            chainNamespace: "eip155",
                        chainId: "0x5",
                        // https://chainlist.org/
                        rpcTarget: `https://rpc.ankr.com/eth_goerli`,
          }
    
            // https://web3auth.io/docs/sdk/pnp/web/modal/initialize#arguments
            const options = {
                    clientId: 'BMwL8o7gYecCOQC57wcJk5ElQxlaFajjF_sTlS4iMeSM8ZA66xk0EZZWAgNAlZodVOkMyLxQvxZzHnJ7vGamc44',
                    web3AuthNetwork: 'testnet',
                    chainConfig,
                    // chainConfig: {
                    //     chainNamespace: "eip155",
                    //     chainId: "0x5",
                    //     // https://chainlist.org/
                    //     rpcTarget: `https://rpc.ankr.com/eth_goerli`,
                    // },
                    uiConfig: {
                        theme: 'dark',
                        loginMethodsOrder: ['google', 'facebook']
                    }
            }
    
            // https://web3auth.io/docs/sdk/pnp/web/modal/initialize#configuring-adapters
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

        const privateKeyProvider = new EthereumPrivateKeyProvider({
          config: { chainConfig },
        });
        
        // https://web3auth.io/docs/sdk/pnp/web/modal/whitelabel#whitelabeling-while-modal-initialization
        const openloginAdapter = new OpenloginAdapter({
            loginSettings: {
            mfaLevel: 'mandatory'
        },
        adapterSettings: {
            uxMode: 'popup',
            whiteLabel: {
                name: 'Safe'
            }
        },
        privateKeyProvider,
        })
    
        const web3AuthConfig = {
            txServiceUrl: 'https://safe-transaction-goerli.safe.global'
        }
    
        // Instantiate and initialize the pack
            const web3AuthModalPack = new Web3AuthModalPack(web3AuthConfig)
            await web3AuthModalPack.init({ options, adapters: [openloginAdapter], modalConfig })
    
            setWeb3AuthModalPack(web3AuthModalPack)
        })()
    }, []);
    
        const login = async () => {
            try{
            console.log("Hello");
            
            const userAddress = await web3AuthModalPack.signIn()
            console.log('SIGN IN RESPONSE: ', userAddress)
    
            const userInfo = await web3AuthModalPack.getUserInfo()
            console.log('USER INFO: ', userInfo)

            const provider = new ethers.providers.Web3Provider(web3AuthModalPack.getProvider())

            console.log("Provider",provider);

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
              console.log("UserData",userData);
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
    <BrowserRouter>   
    <Navbar login={login} userData={userData} logout={logout} />
    <Routes>
    <Route exact path="/" element={<LandingPage/>} />
    <Route path="/Issue-Certificate-Form" element={<IssueCertificateForm/>}></Route>
    <Route path="/IA-Dashboard" element={<IssuingAuthorityDashboard/>}></Route>
    <Route path="/User-Dashboard" element={<UserDashboard/>}></Route>
    <Route path="/Add-Certificate" element={<AddCertificate />} />
    <Route path="/Request-Certificate" element={<RequestCertificate />} />
    <Route path="/landingpage" element={<LandingPage />} />
    <Route path="/getstarted" element={<GetStarted />} />
    <Route path="/verification" element={<VerificationReq />} />
    <Route path="/Registrationuser" element={<RegistrationUser />} />
    <Route path="/copyalumni" element={<CopyAlumni />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
