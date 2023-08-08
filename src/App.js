import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import UserDashboard from './pages/UserDashboard';
import IssuingAuthorityDashboard from './pages/IssuingAuthorityDashboard';
import AddCertificate from './components/userDashboard/AddCertificate';
import IssueCertificateForm from './components/issuingAuthorityDashboard/IssueCertificateForm';
import RequestCertificate from './components/userDashboard/RequestCertificate';
import LandingPage from './components/LandingPage/LandingPage';
import GetStarted from './components/LandingPage/GetStarted';
import VerificationReq from './components/RegistrationPage/VerificationReq';
import RegistrationUser from './components/RegistrationPage/RegistrationUser';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<UserDashboard />} />
    <Route path="/Issue-Certificate-Form" element={<IssueCertificateForm/>}></Route>
    <Route path="/IA-Dashboard" element={<IssuingAuthorityDashboard/>}></Route>
    <Route path="/Add-Certificate" element={<AddCertificate />} />
    <Route path="/Request-Certificate" element={<RequestCertificate />} />
    <Route path="/landingpage" element={<LandingPage />} />
    <Route path="/getstarted" element={<GetStarted />} />
    <Route path="/verification" element={<VerificationReq />} />
    <Route path="/Registrationuser" element={<RegistrationUser />} />


    </Routes>
    </BrowserRouter>
  );
}

export default App;
