import { BrowserRouter as Router, Routes } from 'react-router-dom';
import App from '../App';

// Définissez vos routes dans un composant de routage

<Router>
  <Routes path='/user/:userId' element={<App />} />
</Router>;
