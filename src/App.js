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

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <NavHeader></NavHeader>
          <Routes>
            {/* <Route path="/appointment" element={<PrivateRoute>
              <Appointment />
            </PrivateRoute>}>
            </Route>
            <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
              <Route exact path="/dashboard" element={<DashboardHome></DashboardHome>}>
              </Route>
              <Route path={`/dashboard/payment/:appointmentId`} element={<Payment></Payment>}>

              </Route>
              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/addDoctor`} element={<AdminRoute>
                <AddDoctor></AddDoctor>
              </AdminRoute>}>
              </Route>
            </Route>  */}
            <Route path="/home" element={<Home />}>
            </Route>
            <Route path="/clientLogin" element={<Login />}>
            </Route>

            <Route exact path="/" element={<Home />}>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
