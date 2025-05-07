import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BedrockPassportProvider } from "@bedrock_org/passport";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import AuthCallback from "./pages/AuthCallback";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <BedrockPassportProvider
      baseUrl="https://api.bedrockpassport.com"
      authCallbackUrl="https://first-link-delta.vercel.app/auth/callback"
      tenantId="orange-liap6dojuq"  // Your actual Orange ID tenant identifier
      // Optional: include your WalletConnect project ID if using wallets
      // walletConnectId="<YOUR_WALLETCONNECT_PROJECT_ID>"
    >
      <Router>
        <div className="app-container">
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/auth/callback" element={<AuthCallback />} />
            </Routes>
          </main>
        </div>
        <Analytics />
      </Router>
    </BedrockPassportProvider>
  );
}

export default App;