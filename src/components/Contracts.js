import { ethers } from "ethers";
import RegistrationABI from "../../src/contracts/artifacts/Registrationabi.json";
export const REGISTRATION_ADDRESS =
  "0x08f0731954EC18Eab5Ab98899F8cB374E56E443a";

export const registrationInstance = async () => {
  const { ethereum } = window;
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    if (!provider) {
      console.log("Metamask is not installed, please install!");
    }
    const con = new ethers.Contract(
      REGISTRATION_ADDRESS,
      RegistrationABI,
      signer
    );
    return con;
  } else {
    console.log("error");
  }
};
