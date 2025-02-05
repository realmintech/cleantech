import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Analytics from "./components/Analytics";
import Settings from "./components/Settings";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="analytics" element={<Analytics />} />
            <Route path="sidebar" element={<Sidebar />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Dashboard />
    </>
  );
}

export default App;
