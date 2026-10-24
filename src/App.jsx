import { useEffect, useState } from "react";
import Landing from "./screens/Landing.jsx";
import Login from "./screens/Login.jsx";
import Home from "./screens/Home.jsx";

function readScreen() {
  const hash = window.location.hash;
  if (!hash.startsWith("#/")) return "landing";
  return hash.slice(2) || "landing";
}

export default function App() {
  const [screen, setScreen] = useState(readScreen);

  useEffect(() => {
    function onHashChange() {
      if (!window.location.hash.startsWith("#/")) return;
      setScreen(readScreen());
      window.scrollTo(0, 0);
    }

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  function navigate(next, event) {
    event?.preventDefault();
    window.location.hash = `#/${next}`;
  }

  if (screen === "login") {
    return <Login onNavigate={navigate} />;
  }

  if (screen === "home") {
    return <Home onNavigate={navigate} />;
  }

  return <Landing onNavigate={navigate} />;
}
