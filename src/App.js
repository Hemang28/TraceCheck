import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import UserDashboard from './pages/UserDashboard';
import IssuingAuthorityDashboard from './pages/IssuingAuthorityDashboard';
import AddCertificate from './components/userDashboard/AddCertificate';
import IssueCertificateForm from './components/issuingAuthorityDashboard/IssueCertificateForm';
import RequestCertificate from './components/userDashboard/RequestCertificate';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<UserDashboard />} />
    <Route path="/Issue-Certificate-Form" element={<IssueCertificateForm/>}></Route>
    <Route path="/IA-Dashboard" element={<IssuingAuthorityDashboard/>}></Route>
    <Route path="/Add-Certificate" element={<AddCertificate />} />
    <Route path="/Request-Certificate" element={<RequestCertificate />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
