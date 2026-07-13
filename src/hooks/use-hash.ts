"use client";

import { useEffect, useState } from "react";

export function useHash() {
  const [hash, setHash] = useState(() => {
    if (typeof window !== "undefined") {
      return window.location.hash;
    }
    return "";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleHashChange = () => {
        setHash(window.location.hash);
      };

      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  const navigateTo = (newHash: string) => {
    if (typeof window !== "undefined") {
      if (newHash === "") {
        // Clear hash cleanly without leaving a stray "#" in the browser URL bar
        window.history.pushState(null, "", window.location.pathname + window.location.search);
        setHash("");
      } else {
        window.location.hash = newHash;
      }
    }
  };

  return [hash, navigateTo] as const;
}
