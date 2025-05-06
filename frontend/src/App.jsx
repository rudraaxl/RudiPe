import { BrowserRouter , Routes, Route } from 'react-router-dom';
import {Dashboard} from './pages/Dashboard';
import {Signin} from './pages/Signin';
import {SendMoney} from './pages/SendMoney';
import {Signup} from './pages/Signup';

import './App.css';

function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path = "/signup" element = {< Signup />} />
            <Route path = "/signin" element = {<Signin />} />
            <Route path = "/dashboard" element = {<Dashboard />} />
            <Route path = "/send" element = {<SendMoney />} /> 
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
