import './App.css';
import { Home } from './views/Home';
import { LoginCustomer } from './components/LoginCustomer';
import { Navbar } from './components/Navbar';
import { Register } from './components/Register';
import SearchTable from './components/SearchTable';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CustomerDashboard } from './views/CustomerDashboard';
import { AdminDashboard } from './views/AdminDashboard';
import { AdminLogin } from './views/AdminLogin';
import { WasherLogin } from './views/WasherLogin';
import { Order } from './components/Order';
import { CustomerUpdate } from './components/CustomerUpdate';
import Content from './views/blog/Content';
import { NewsContextProvider } from './views/blog/NewsContext';
import { AboutUs } from './views/AboutUs';
import { WasherDashboard } from './views/WasherDashboard';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/adminlogin" element={<AdminLogin/>} />
          <Route path="/washerlogin" element={<WasherLogin/>} />
          <Route path="/profile" element={<CustomerDashboard/>} />
          <Route path="/adminprofile" element={<AdminDashboard/>} />
          <Route path="/customersearch" element={<SearchTable/>} />
          <Route path="/updatecustomer" element={<CustomerUpdate/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/blogs" element={<NewsContextProvider><Content/></NewsContextProvider>}/>
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/washer" element={<WasherDashboard/>} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
