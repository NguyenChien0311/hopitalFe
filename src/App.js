import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import BookingDetails from "./bookingDetails/BookingDetails";
import Booking from "./scenes/Booking";
import Calendar from "./scenes/calendar/calendar";
import Dashboard from "./scenes/dashboard";
import Doctor from "./scenes/Doctor";
import FAQ from "./scenes/faq";
import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import Patient from "./scenes/Patient";
import Record from "./scenes/Record";
import User from "./scenes/user";
import React from 'react';
import Sreach_booking from "./sreach_booking/sreach_booking";
import { ColorModeContext, useMode } from "./theme";
  import BKHome from "./pages/new/BookingAll/BKHome";
  import BKHopital from "./pages/new/BookingAll/BKHopital";
  import BKEminationPackage from "./pages/new/BookingAll/BKEminationPackage";
  import QuickBooking from './pages/new/BookingAll/QuickBooking';
  import SingleProduct from './pages/new/Product/SingleProduct';
  import Product from "./pages/new/Product/Product";
const Home = React.lazy(() => import('./pages/Home/Home'));
const Layout = React.lazy(() => import('./pages/Layouts/Layout'));
const Login = React.lazy(() => import("./pages/Login/Login"));
const Register = React.lazy(() => import("./pages/Regist/Register"));
const None = React.lazy(() => import("./pages/None/None"));
const Intro = React.lazy(() => import("./pages/new/Intro"));
const Service = React.lazy(() => import("./pages/new/Service"));
const Major = React.lazy(() => import("./pages/new/Major"));
const BookAppointment = React.lazy(() => import("./pages/BookAppointment/BookAppointments"));
const ThankYou = React.lazy(() => import("./pages/BookAppointment/ThankYou"));
const About = React.lazy(() => import("./pages/About/About"));
const Blogs = React.lazy(() => import("./pages/Blogs/Blogs"));
function App() {


  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  function ThemeRoutes() {
    return (
      <ColorModeContext.Provider value={{ colorMode }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Outlet />
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }
  return (
    <Routes>
      <Route path="/layout" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="user" element={<User />} />
        <Route path="booking" element={<Booking />} />
        <Route path="booking/details" element={<BookingDetails />} />
        <Route path="patient" element={<Patient />} />
        <Route path="doctor" element={<Doctor />} />
        <Route path="record" element={<Record />} />
        {/* 
        <Route path="/productsproductId" element={<SingleProduct />} /> */}
        <Route exact path="service" element={<Service />} />
        <Route path="bookingHospital" element={<BKHopital />} />
        <Route path="booking_home" element={<BKHome />} />
        <Route path="BKEminationPackage" element={<BKEminationPackage />} />
        <Route path="quick_booking" element={<QuickBooking />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
      <Route path="/" element={<React.Suspense fallback={<>...</>}>
        <Layout />
      </React.Suspense>}>
        <Route
          index
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Register />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <None />
            </React.Suspense>
          }
        />

        <Route
          path="/Service"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Service />
            </React.Suspense>
          }
        />
        <Route
          path="/major"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Major />
            </React.Suspense>
          }
        />
        <Route
          path="/bookappointment"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <BookAppointment />
            </React.Suspense>
          }
        />
        <Route
          path="/thankyou"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <ThankYou />
            </React.Suspense>
          }
        />
        <Route
          path="/About"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <About />
            </React.Suspense>
          }
        />
        <Route
          path="/blogs"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Blogs />
            </React.Suspense>
          }
        />
        <Route
          path="/sreach_booking"
          element={<React.Suspense fallback={<>Loading...</>}>
            <Sreach_booking />
          </React.Suspense>}>
        </Route>
      </Route>

    </Routes>
  );
}

export default App;
