import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { BedrockPassportProvider, usePassport, createPassportClient } from '@bedrock-labs/passport-react';

// Initialize passport client once
let passportClient;

function AuthWrapper({ children }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      passportClient = createPassportClient({
        tenantId: "orange-liap6dojuq",
        baseUrl: "https://api.bedrockpassport.com",
        authCallbackUrl: window.location.origin + "/auth/callback"
      });
      initialized.current = true;
    }
  }, []);

  return children;
}

function LoginButton() {
  const { login } = usePassport();
  
  return (
    <button 
      onClick={() => login({ displayName: 'First Link App' })}
      style={{
        padding: '12px 24px',
        background: '#ff6b35',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px'
      }}
    >
      Continue with Orange ID
    </button>
  );
}

function AuthCallbackHandler() {
  const { handleAuthCallback } = usePassport();
  const navigate = useNavigate();
  const [authStatus, setAuthStatus] = useState('Processing...');

  useEffect(() => {
    const executeAuthCallback = async () => {
      try {
        await handleAuthCallback();
        setAuthStatus('Authentication successful!');
        setTimeout(() => navigate('/'), 2000);
      } catch (error) {
        console.error('Auth error:', error);
        setAuthStatus('Authentication failed. Redirecting...');
        setTimeout(() => navigate('/login'), 3000);
      }
    };
    
    executeAuthCallback();
  }, [handleAuthCallback, navigate]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h3>{authStatus}</h3>
    </div>
  );
}

function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to First Link</h1>
      <p>You are successfully authenticated!</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthWrapper>
        <BedrockPassportProvider
          client={passportClient}
          authCallbackUrl={window.location.origin + "/auth/callback"}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginButton />} />
            <Route path="/auth/callback" element={<AuthCallbackHandler />} />
          </Routes>
        </BedrockPassportProvider>
      </AuthWrapper>
    </Router>
  );
}

export default App;