import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Frame1 from "./pages/Frame1";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import RegisterPage from "./pages/RegisterPage";
import WithdrawPage from "./pages/WithdrawPage";
import DepositPage from "./pages/DepositPage";
import CustomerServicePage from "./pages/CustomerServicePage";
import RegisterTicketPage from "./pages/RegisterTicketPage";
import WithdrawTicketPage from "./pages/WithdrawTicketPage";
import DepositTicketPage from "./pages/DepositTicketPage";
import CustomerServiceTicketPage from "./pages/CustomerServiceTicketPage";
import AdminPasswordPage from "./pages/AdminPasswordPage";
import AdminHomePage from "./pages/AdminHomePage";
import AdminQueuePage from "./pages/AdminQueuePage";
import AdminStatsPage from "./pages/AdminStatsPage";
import TvPage from "./pages/TvPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const [registerTicketCounter, setRegisterTicketCounter] = useState(0);
  const [withdrawTicketCounter, setWithdrawTicketCounter] = useState(0);
  const [depositTicketCounter, setDepositTicketCounter] = useState(0); // Initialize Deposit ticket counter
  const [customerServiceTicketCounter, setCustomerServiceTicketCounter] =
    useState(0); // Initialize Customer Service ticket counter

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Frame1 />,
    },
    {
      path: "/admin",
      element: <AdminPage />,
    },
    {
      path: "/user",
      element: <UserPage />,
    },
    {
      path: "/tv",
      element: <TvPage />,
    },
    {
      path: "/register",
      element: (
        <RegisterPage
          registerTicketCounter={registerTicketCounter}
          setRegisterTicketCounter={setRegisterTicketCounter}
        />
      ),
    },
    {
      path: "/withdraw",
      element: (
        <WithdrawPage
          withdrawTicketCounter={withdrawTicketCounter}
          setWithdrawTicketCounter={setWithdrawTicketCounter}
        />
      ),
    },
    {
      path: "/deposit",
      element: (
        <DepositPage
          depositTicketCounter={depositTicketCounter}
          setDepositTicketCounter={setDepositTicketCounter}
        />
      ), // Pass Deposit ticketCounter
    },
    {
      path: "/service",
      element: (
        <CustomerServicePage
          customerServiceTicketCounter={customerServiceTicketCounter}
          setCustomerServiceTicketCounter={setCustomerServiceTicketCounter}
        />
      ),
    },
    {
      path: "/register/ticket",
      element: (
        <RegisterTicketPage registerTicketCounter={registerTicketCounter} />
      ),
    },
    {
      path: "/withdraw/ticket",
      element: (
        <WithdrawTicketPage withdrawTicketCounter={withdrawTicketCounter} />
      ),
    },
    {
      path: "/deposit/ticket",
      element: (
        <DepositTicketPage depositTicketCounter={depositTicketCounter} />
      ),
    },
    {
      path: "/service/ticket",
      element: (
        <CustomerServiceTicketPage
          customerServiceTicketCounter={customerServiceTicketCounter}
        />
      ), // Pass Customer Service ticketCounter
    },
    {
      path: "/admin/password",
      element: <AdminPasswordPage />,
    },
    {
      path: "/admin/home",
      element: <AdminHomePage />,
    },
    {
      path: "/admin/queue",
      element: <AdminQueuePage />,
    },
    {
      path: "/admin/stats",
      element: <AdminStatsPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
