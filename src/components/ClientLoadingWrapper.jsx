// src/components/ClientLoadingWrapper.tsx
"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen"; // Import loading screen component

export default function ClientLoadingWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust the duration of the loading screen (5 seconds)

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <LoadingScreen /> : <>{children}</>; // Show loading screen until time passes
}
