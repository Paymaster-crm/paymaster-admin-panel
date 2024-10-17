import "./App.css";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("pm_user")));

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">{user ? <Dashboard /> : <LoginPage />}</div>
    </UserContext.Provider>
  );
}

export default App;
