import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import UserDashboard from './pages/UserDashboard';
import LandingPage from './components/LandingPage/LandingPage';
import IssuingAuthorityDashboard from './pages/IssuingAuthorityDashboard';
import AddCertificate from './components/userDashboard/AddCertificate';
import IssueCertificateForm from './components/issuingAuthorityDashboard/IssueCertificateForm';
import RequestCertificate from './components/userDashboard/RequestCertificate';
import GetStarted from './components/LandingPage/GetStarted';
import VerificationReq from './components/RegistrationPage/VerificationReq';
import RegistrationUser from './components/RegistrationPage/RegistrationUser';
import CopyAlumni from './components/RegistrationPage/CopyAlumni';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<LandingPage />} />
    <Route path="/Issue-Certificate-Form" element={<IssueCertificateForm/>}></Route>
    <Route path="/IA-Dashboard" element={<IssuingAuthorityDashboard/>}></Route>
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
