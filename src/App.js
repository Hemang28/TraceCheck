import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
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
import Footer from './components/Footer';
import { Web3AuthModalPack} from '@safe-global/auth-kit'
import { OpenloginAdapter } from '@web3auth/openlogin-adapter'
import { WALLET_ADAPTERS } from '@web3auth/base'
import {ethers} from 'ethers';
import React,{ useEffect, useState } from 'react'
import { GelatoRelayPack } from '@safe-global/relay-kit';
import Safe, {EthersAdapter, getSafeContract, SafeFactory} from '@safe-global/protocol-kit';
import Registrationabi from '../src/contracts/artifacts/Registrationabi.json'
import { MetaTransactionData, MetaTransactionOptions, OperationType } from '@safe-global/safe-core-sdk-types';
const contractAddress = "0x08FcBDE153FE5Ae7E05c6d66dab83dbE6A33F29b";

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
      useEffect(() => {
        (async () => {

          const chainConfig ={
            chainNamespace: "eip155",
                        chainId: "0x5",
                        rpcTarget: `https://rpc.ankr.com/eth_goerli`,
          }
            const options = {
                    clientId: 'BMlPdry8FpY80fT_cbuDJ8mjAM62Bo_6HnZxvfAE6ZaNLsEQaH2Nr8iqFap3uZCufIm5xfKWBZYklVjfCUr3vS0',
                    web3AuthNetwork: 'testnet',
                    chainConfig,
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

        const privateKeyProvider = new EthereumPrivateKeyProvider({
          config: { chainConfig },
        });
        
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
  
            const web3AuthModalPack = new Web3AuthModalPack(web3AuthConfig)
            await web3AuthModalPack.init({ options, adapters: [openloginAdapter], modalConfig })
    
            setWeb3AuthModalPack(web3AuthModalPack)
        })()
    }, []);
    
        const login = async () => {
            try{
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

        // const deploySafe = async () => {
        //   try {
        //     const RPC_URL = "https://goerli.base.org";
        //     const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
        //     console.log(process.env.OWNER_1_PRIVATE_KEY);
        //     // const signer = userData.signer;
        //     const owner1Signer = new ethers.Wallet(
        //       "0x1910812769a4d5a6b96940b67a5a011a99de8d235b078cdfa7e030641d189eab",
        //       provider
        //     );
        //     console.log(owner1Signer);
        //     console.log(userData.address);
      
        //     const ethAdapter = new EthersAdapter({
        //       ethers,
        //       signerOrProvider: owner1Signer,
        //     });
        //     console.log(ethAdapter);
      
        //     const safeFactory = await SafeFactory.create({ ethAdapter });
        //     console.log(safeFactory);
      
        //     const owners = [`${userData.address.eoa}`];
        //     const threshold = 1;
      
        //     const safeAccountConfig = {
        //       owners,
        //       threshold,
        //       // ...
        //     };
      
        //     const safeSdk = await safeFactory.deploySafe({
        //       safeAccountConfig,
        //     });

        //     console.log(safeSdk);
        //     const newSafeAddress = await safeSdk.getAddress();
        //     console.log("Your Safe has been deployed:");
        //     console.log(`https://goerli.etherscan.io/address/${newSafeAddress}`);
        //     console.log(`https://app.safe.global/gor:${newSafeAddress}`);
        //     console.log(newSafeAddress);
        //   } catch (err) {
        //     console.log(err);
        //   }
        // };

        // const registration = async () =>{

        //   const RPC_URL = "https://goerli.base.org";
        //   const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
        //   const signer = new ethers.Wallet("0x1910812769a4d5a6b96940b67a5a011a99de8d235b078cdfa7e030641d189eab")
        //   const safeAddress = userData.address.safes[0];
        //   const chainId = 84531
        //   const gasLimit = '100000'

        //   const GELATO_RELAY_API_KEY = "8H_kZ7L9r75FLguQmTkc22q5l8n3_B_yn9Bk1w63Gmc_";

        //   const options = {
        //     gasLimit,
        //     isSponsored: true,
        //   };
       
        //   const ethAdapter = new EthersAdapter({
        //     ethers,
        //     signerOrProvider: userData.signer,
        //   });

        //   console.log(safeAddress);
        //   const safeSDK = await Safe.create({
        //     ethAdapter,
        //     safeAddress,
        //   });
        //   const relayAdapter = new GelatoRelayPack(GELATO_RELAY_API_KEY);

        //   console.log(Registrationabi.abi);
        //     const contract = new ethers.Contract(
        //       contractAddress,
        //       Registrationabi.abi,
        //       userData.signer
        //   );

        //   const functionName = "setUser";

        //   const functionData =  contract.interface.encodeFunctionData(functionName, [
        //     userData.name,userData.email,userData.profileImg
        //   ]);

        //   console.log(functionData);
      
        //   const safeTransactionData = {
        //     to: "0x08FcBDE153FE5Ae7E05c6d66dab83dbE6A33F29b",
        //     data: functionData,
        //     value: 0,
        //   };

        //   console.log(safeTransactionData);
        //   const safeTransaction = await safeSDK.createTransaction({
        //     safeTransactionData,
        //   });
        //   console.log(safeTransaction);
      
        //   const signedSafeTx = await safeSDK.signTransaction(safeTransaction);

        //   const safeSingletonContract = await getSafeContract({
        //     ethAdapter,
        //     safeVersion: await safeSDK.getContractVersion()
        //   })
      
        //   const encodedTx = safeSDK
        //     .getContractManager()
        //     .safeContract.encode("execTransaction", [
        //       signedSafeTx.data.to,
        //       signedSafeTx.data.value,
        //       signedSafeTx.data.data,
        //       signedSafeTx.data.operation,
        //       signedSafeTx.data.safeTxGas,
        //       signedSafeTx.data.baseGas,
        //       signedSafeTx.data.gasPrice,
        //       signedSafeTx.data.gasToken,
        //       signedSafeTx.data.refundReceiver,
        //       signedSafeTx.encodedSignatures(),
        //     ]);

        //     const relayTransaction = {
        //       target: safeAddress,
        //       encodedTransaction: encodedTx,
        //       chainId,
        //       options,
        //     };
        //     const response = await relayAdapter.relayTransaction(relayTransaction);
        
        //     console.log(
        //       `Relay Transaction Task ID: https://relay.gelato.digital/tasks/status/${response.taskId}`
        //     );
        // }

  return (  
    <BrowserRouter>   
    <Routes>    
    <Route exact path="/" element={<LandingPage/>} />
    <Route
          path="/*"
          element={
            <>
              <Navbar userData={userData} login={login} logout={logout}/>
              <Routes>
    <Route path="/Issue-Certificate-Form" element={<IssueCertificateForm/>}></Route>
    <Route path="/IA-Dashboard" element={<IssuingAuthorityDashboard userData={userData}/>}></Route>
    <Route path="/User-Dashboard" element={<UserDashboard userData={userData} />}></Route>
    <Route path="/Add-Certificate" element={<AddCertificate />} />
    <Route path="/Request-Certificate" element={<RequestCertificate />} />
    <Route path="/landingpage" element={<LandingPage />} />
    <Route path="/getstarted" element={<GetStarted userData={userData} login={login} logout={logout}/>} />
    <Route path="/verification" element={<VerificationReq />} />
    <Route path="/Registrationuser" element={<RegistrationUser />} />
    <Route path="/copyalumni" element={<CopyAlumni />} />
    </Routes>
    </>
    } 
    />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
