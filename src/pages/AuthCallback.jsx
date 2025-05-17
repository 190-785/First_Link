// 1. AuthWrapper.jsx (prevents duplicate WalletConnect initialization)
import { createPassportClient } from '@bedrock-labs/passport-react';
import { useEffect, useRef } from 'react';

let passportClient;

export default function AuthWrapper({ children }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      passportClient = createPassportClient({
        tenantId: "orange-liap6dojuq", // Your Project ID
        baseUrl: "https://api.bedrockpassport.com",
        authCallbackUrl: "https://first-link-delta.vercel.app/auth/callback"
      });
      initialized.current = true;
    }
  }, []);

  return children;
}