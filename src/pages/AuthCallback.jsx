import React, { useEffect } from "react";
import { useBedrockPassport } from "@bedrock_org/passport";

const AuthCallback = () => {
  const { loginCallback } = useBedrockPassport();

  useEffect(() => {
    const login = async (token, refreshToken) => {
      const success = await loginCallback(token, refreshToken);
      if (success) {
        window.location.href = "/"; // redirect home after login
      }
    };

    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const refreshToken = params.get("refreshToken");

    if (token && refreshToken) {
      login(token, refreshToken);
    }
  }, [loginCallback]);

  return <div className="text-center p-8">Signing you in...</div>;
};

export default AuthCallback;