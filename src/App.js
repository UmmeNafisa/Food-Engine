import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AuthProvider from './Contexts/AuthProvider'
import Home from "./Pages/Home/Home/Home";
import NavHeader from "./Pages/Shared/NavHeader/NavHeader";
import Login from "./Pages/Login/Login/Login";
import Footer from "./Pages/Shared/Footer/Footer";
import AddFoods from "./Pages/AdminPanel/AddFoods/AddFoods";
import ClientDashboard from "./Pages/ClientPanel/ClientDashboard";
import PlaceOrder from "./Pages/ClientPanel/PlaceOrder";
import ConfirmOrder from "./Pages/ClientPanel/ConfirmOrder";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <NavHeader></NavHeader>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/clientLogin" element={<Login />} />
            <Route path="/addFoods" element={<AddFoods />} />
            <Route path="/clientDashboard" element={<PrivateRoute> <ClientDashboard /> </PrivateRoute>} />
            <Route path="/confirmOrder" element={<ConfirmOrder />} />
            <Route path={`/placeOrder/:id`} element={<PrivateRoute> <PlaceOrder /> </PrivateRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
